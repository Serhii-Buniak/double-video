import VideoElement from "./VideoElement.js";

class PictureVideoElement extends VideoElement {
    protected htmlElement = document.querySelector('#picture-video') as HTMLVideoElement;
}

export default PictureVideoElement;