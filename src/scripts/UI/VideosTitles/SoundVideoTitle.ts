import VideoTitle from "./VideoTitle";

class SoundVideoTitle extends VideoTitle {
    htmlElement = document.querySelector('#js-sound-file') as HTMLElement;
}

export default SoundVideoTitle;