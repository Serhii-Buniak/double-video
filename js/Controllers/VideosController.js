import PictureEpisodeRepository from "../Data/PictureEpisodeRepository.js";
import SoundEpisodeRepository from "../Data/SoundEpisodeRepository.js";
import VideosService from "../Data/VideosService.js";
import DelayInput from "../UI/DelayInput.js";
import AudioSyncCheckbox from "../UI/SyncCheckboxes/AudioSyncCheckbox.js";
import VideoSyncCheckbox from "../UI/SyncCheckboxes/VideoSyncCheckbox.js";
import PictureVideoElement from "../UI/VideoElements/PictureVideoElement.js";
import SoundVideoElement from "../UI/VideoElements/SoundVideoElement.js";
class VideosController {
    constructor() {
        this._pictureRepository = new PictureEpisodeRepository();
        this._soundRepository = new SoundEpisodeRepository();
        this._videosService = new VideosService();
        this._audioSyncElement = new AudioSyncCheckbox();
        this._videoSyncElement = new VideoSyncCheckbox();
        this._soundElement = new SoundVideoElement();
        this._pictureElement = new PictureVideoElement();
        this._delayElement = new DelayInput();
        this._prevTime = 0;
    }
    ;
    onVolumeChange() {
        if (this._audioSyncElement.checked == true) {
            this._soundElement.volume = this._pictureElement.volume;
            setTimeout(() => this._pictureElement.mute(), 2000);
        }
    }
    onVideoSyncSwitch() {
        if (this._videoSyncElement.checked) {
            this._soundElement.time = this._pictureElement.time - this._delayElement.value;
        }
        this._videosService.isVideoSync = this._videoSyncElement.checked;
    }
    onAudioSyncSwitch() {
        this._videosService.isAudioSync = this._audioSyncElement.checked;
        if (this._audioSyncElement.checked) {
            this._soundElement.volume = this._pictureElement.volume;
            this._pictureElement.mute();
        }
    }
    onDelayChange() {
        this._soundElement.time = this._pictureElement.time - this._delayElement.value;
        this._videosService.delay = this._delayElement.value;
    }
    onVideoTrackMove() {
        let pictureTime = this._pictureElement.time;
        if (Math.abs(this._prevTime - pictureTime) > 0.080 && this._videoSyncElement.checked === true) {
            this._soundElement.time = pictureTime - this._delayElement.value;
        }
        this._pictureRepository.time = pictureTime;
        this._soundRepository.time = this._soundElement.time;
        this._prevTime = pictureTime;
    }
    restore() {
        this._delayElement.value = this._videosService.delay;
        this._videoSyncElement.checked = this._videosService.isVideoSync;
        this._audioSyncElement.checked = this._videosService.isAudioSync;
        this._soundElement.time = this._soundRepository.time;
        this._pictureElement.time = this._pictureRepository.time;
        this._prevTime = this._pictureElement.time;
    }
}
export default VideosController;
