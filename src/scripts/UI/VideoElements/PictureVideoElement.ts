import VideoElement from "./VideoElement.js";

class PictureVideoElement extends VideoElement {
    constructor() {
        super(document.querySelector('#picture-video') as HTMLVideoElement)
    }
}

export default PictureVideoElement;