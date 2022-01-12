import PictureVideoElement from "../UI/VideoElements/PictureVideoElement.js";
import Episode from "./Episode.js";
import Video from "./Video.js";

class PictureVideo extends Video {
    constructor(episode?: Episode) {
        const element = new PictureVideoElement();
        const folder = '/Picture';
        super(element, folder, episode)
    }
}

export default PictureVideo;