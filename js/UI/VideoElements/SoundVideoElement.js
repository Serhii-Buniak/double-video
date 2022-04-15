import VideoElement from "./VideoElement.js";
class SoundVideoElement extends VideoElement {
    constructor() {
        super(document.querySelector('#sound-video'));
    }
}
export default SoundVideoElement;
