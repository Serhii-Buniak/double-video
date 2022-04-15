import VideoTitle from "./VideoTitle.js";
class SoundVideoTitle extends VideoTitle {
    constructor() {
        super(...arguments);
        this.htmlElement = document.querySelector('#js-sound-file');
    }
}
export default SoundVideoTitle;
