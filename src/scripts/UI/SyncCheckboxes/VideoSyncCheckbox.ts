import SyncCheckbox from "./SyncCheckbox";

class VideoSyncCheckbox extends SyncCheckbox {
    protected _htmlElement = document.getElementById('video-sync') as HTMLInputElement;
}

export default VideoSyncCheckbox;