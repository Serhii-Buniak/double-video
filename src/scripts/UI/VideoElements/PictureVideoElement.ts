import VideoElement from "./VideoElement";

class PictureVideoElement extends VideoElement {
    protected htmlElement = document.querySelector('#picture-video') as HTMLVideoElement;
}

export default PictureVideoElement;