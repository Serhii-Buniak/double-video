import Episode from "./Episode.js";
import Video from "./Video.js";

class PictureVideo extends Video {
    constructor(episode?: Episode) {
        const htmlElement = document.querySelector('#picture-video') as HTMLVideoElement;
        const folder = '/Picture';
        super(htmlElement, folder, episode)
    }
}

export default PictureVideo;