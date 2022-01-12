import VideoTitle from "./VideoTitle.js";

class PictureVideoTitle extends VideoTitle {
    protected htmlElement = document.getElementById('js-picture-file') as HTMLElement;
}

export default PictureVideoTitle;