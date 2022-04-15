import InputElement from "../InputElement.js";
import SyncCheckbox from "./SyncCheckbox.js";
class VideoSyncCheckbox extends SyncCheckbox {
    constructor() {
        super(...arguments);
        this.inputElement = new InputElement('#video-sync');
    }
    ;
}
export default VideoSyncCheckbox;
