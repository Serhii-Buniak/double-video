import VideosController from "../Controllers/VideosController";
import DelayInput from "../UI/DelayInput";
import AudioSyncCheckbox from "../UI/SyncCheckboxes/AudioSyncCheckbox";
import VideoSyncCheckbox from "../UI/SyncCheckboxes/VideoSyncCheckbox";
import PictureVideoElement from "../UI/VideoElements/PictureVideoElement";
import SoundVideoElement from "../UI/VideoElements/SoundVideoElement";

const controller = new VideosController();

const picture = new PictureVideoElement()

const videoSync = new VideoSyncCheckbox()
const audioSync = new AudioSyncCheckbox()

const delayElement = new DelayInput();

document.addEventListener("DOMContentLoaded", controller.restore);

picture.addEventListener('volumechange', controller.onVolumeChange);

videoSync.addEventListener('change', controller.onVideoSyncSwitch);
audioSync.addEventListener('change', controller.onAudioSyncSwitch);

delayElement.addEventListener('change', controller.onDelayChange);

setInterval(() => {
    controller.onVideoTrackMove;
}, 5);