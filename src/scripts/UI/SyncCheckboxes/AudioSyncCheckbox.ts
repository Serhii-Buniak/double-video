import InputElement from "../InputElement.js";
import SyncCheckbox from "./SyncCheckbox.js";

class AudioSyncCheckbox extends SyncCheckbox {
    protected inputElement = new InputElement<boolean>('#audio-sync');
}

export default AudioSyncCheckbox;