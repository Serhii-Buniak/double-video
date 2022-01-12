import VideoTitle from "./VideoTitle";

class PictureVideoTitle extends VideoTitle {
    protected htmlElement = document.querySelector('#js-picture-file') as HTMLElement;
}

export default PictureVideoTitle;