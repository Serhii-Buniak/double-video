import SoundVideoElement from "../UI/VideoElements/SoundVideoElement.js";
import Episode from "./Episode.js";
import Video from "./Video.js";

class SoundVideo extends Video {
    constructor(episode?: Episode) {
        const element = new SoundVideoElement();
        const folder = '/Sound';
        super(element, folder, episode)
    }

}

export default SoundVideo;