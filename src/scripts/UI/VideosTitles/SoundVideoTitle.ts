import VideoTitle from "./VideoTitle";

class SoundVideoTitle extends VideoTitle {
    protected htmlElement = document.querySelector('#js-sound-file') as HTMLElement;
}

export default SoundVideoTitle;