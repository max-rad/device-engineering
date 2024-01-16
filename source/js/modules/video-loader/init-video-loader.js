import {VideoLoader} from './video-loader';

const initVideoLoader = () => {
  const videoLoader = new VideoLoader();
  videoLoader.init();
};

export {initVideoLoader};
