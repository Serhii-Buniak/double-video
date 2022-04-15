import InputElement from "../InputElement.js";
import SyncCheckbox from "./SyncCheckbox.js";
class AudioSyncCheckbox extends SyncCheckbox {
    constructor() {
        super(...arguments);
        this.inputElement = new InputElement('#audio-sync');
    }
}
export default AudioSyncCheckbox;
