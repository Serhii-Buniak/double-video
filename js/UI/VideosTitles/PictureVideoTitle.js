import VideoTitle from "./VideoTitle.js";
class PictureVideoTitle extends VideoTitle {
    constructor() {
        super(...arguments);
        this.htmlElement = document.getElementById('js-picture-file');
    }
}
export default PictureVideoTitle;
