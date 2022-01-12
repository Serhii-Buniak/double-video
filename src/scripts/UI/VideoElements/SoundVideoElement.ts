import VideoElement from "./VideoElement";

class SoundVideoElement extends VideoElement {
    protected htmlElement = document.querySelector('#sound-video') as HTMLVideoElement;
}

export default SoundVideoElement;