import Episode from "./Episode.js";
import Video from "./Video.js";

class SoundVideo extends Video {
    constructor(episode?: Episode) {
        const htmlElement = document.querySelector('#sound-video') as HTMLVideoElement;
        const folder = '/Sound';
        super(htmlElement, folder, episode)
    }

}

export default SoundVideo;