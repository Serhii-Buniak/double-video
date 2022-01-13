import VideoElement from "./VideoElement.js";

class SoundVideoElement extends VideoElement {
    constructor() {
        super(document.querySelector('#sound-video') as HTMLVideoElement);
    }
}

export default SoundVideoElement;