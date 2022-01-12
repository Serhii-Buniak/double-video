import VideoTitle from "./VideoTitle.js";

class SoundVideoTitle extends VideoTitle {
    protected htmlElement = document.querySelector('#js-sound-file') as HTMLElement;
}

export default SoundVideoTitle;