export class VideoLoader {
  constructor() {
    this._videos = document.querySelectorAll('[data-video]');
    this._player = null;
  }

  init() {
    if (!this._videos.length) {
      return;
    }

    this._videos.forEach((video) => {
      const preview = video.querySelector('[data-video-preview]');
      const loader = video.querySelector('[data-video-loader]');
      const iframe = video.querySelector('[data-video-iframe]');

      let videoSrc;

      if (video.dataset.video) {
        videoSrc = video.dataset.video;
      }

      this._initYoutubePlayer(preview, loader, iframe, videoSrc);
    });
  }

  _initYoutubePlayer(preview, loader, iframe, videoSrc) {
    onYouTubeIframeAPIReady();

    function onYouTubeIframeAPIReady() {
      const player = new YT.Player(iframe, {
        width: '680',
        height: '370',
        playerVars: {
          'controls': 1,
          'showInfo': 0,
        },
        videoId: videoSrc,
        events: {
          'onReady': onPlayerReady,
        },
      });
    }

    function onPlayerReady(evt) {
      loader.style.display = 'none';

      if (preview) {
        preview.style.display = 'block';

        preview.addEventListener('click', () => {

          preview.style.display = 'none';
          evt.target.playVideo();
        });
      }
    }
  }
}
