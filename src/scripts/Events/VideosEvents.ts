import VideosController from "../Controllers/VideosController.js";
import DelayInput from "../UI/DelayInput.js";
import AudioSyncCheckbox from "../UI/SyncCheckboxes/AudioSyncCheckbox.js";
import VideoSyncCheckbox from "../UI/SyncCheckboxes/VideoSyncCheckbox.js";
import PictureVideoElement from "../UI/VideoElements/PictureVideoElement.js";

const controller = new VideosController();

const picture = new PictureVideoElement()

const videoSync = new VideoSyncCheckbox()
const audioSync = new AudioSyncCheckbox()

const delayElement = new DelayInput();

document.addEventListener("DOMContentLoaded", controller.restore.bind(controller));

picture.addEventListener('volumechange', controller.onVolumeChange.bind(controller));

videoSync.addEventListener('change', controller.onVideoSyncSwitch.bind(controller));
audioSync.addEventListener('change', controller.onAudioSyncSwitch.bind(controller));

delayElement.addEventListener('change', controller.onDelayChange.bind(controller));

setInterval(controller.onVideoTrackMove.bind(controller), 20);