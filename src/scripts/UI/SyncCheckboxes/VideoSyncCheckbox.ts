import InputElement from "../InputElement.js";
import SyncCheckbox from "./SyncCheckbox.js";

class VideoSyncCheckbox extends SyncCheckbox {
    protected inputElement = new InputElement<boolean>('#video-sync');;
}

export default VideoSyncCheckbox;