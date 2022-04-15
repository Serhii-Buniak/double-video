import PictureVideoElement from "../UI/VideoElements/PictureVideoElement.js";
import Video from "./Video.js";
class PictureVideo extends Video {
    constructor(episode) {
        const element = new PictureVideoElement();
        const folder = '/Picture';
        super(element, folder, episode);
    }
}
export default PictureVideo;
