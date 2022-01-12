import SyncCheckbox from "./SyncCheckbox";

class AudioSyncCheckbox extends SyncCheckbox {
    protected _htmlElement = document.getElementById('video-sync') as HTMLInputElement;
}

export default AudioSyncCheckbox;