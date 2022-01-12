import EpisodeRepository from "../Data/EpisodeRepository.js";
import PictureEpisodeRepository from "../Data/PictureEpisodeRepository.js";
import SoundEpisodeRepository from "../Data/SoundEpisodeRepository.js";
import VideosService from "../Data/VideosService.js";
import DelayInput from "../UI/DelayInput.js";
import AudioSyncCheckbox from "../UI/SyncCheckboxes/AudioSyncCheckbox.js";
import VideoSyncCheckbox from "../UI/SyncCheckboxes/VideoSyncCheckbox.js";
import PictureVideoElement from "../UI/VideoElements/PictureVideoElement.js";
import SoundVideoElement from "../UI/VideoElements/SoundVideoElement.js";

class VideosController {
    private readonly _pictureRepository = new PictureEpisodeRepository();
    private readonly _soundRepository = new SoundEpisodeRepository();
    private readonly _videosService = new VideosService();
    private readonly _audioSyncElement = new AudioSyncCheckbox();
    private readonly _videoSyncElement = new VideoSyncCheckbox();
    private readonly _soundElement = new SoundVideoElement();;
    private readonly _pictureElement = new PictureVideoElement();
    private readonly _delayElement = new DelayInput();
    private _prevTime: number = 0;

    public onVolumeChange() {
        if (this._audioSyncElement.checked) {
            this._soundElement.volume = this._pictureElement.volume;
            setTimeout(() => this._pictureElement.mute(), 2000);
        }
    }

    public onVideoSyncSwitch() {
        if (this._videoSyncElement.checked) {
            this._soundElement.time = this._pictureElement.time - this._delayElement.value;
        }
    }

    public onAudioSyncSwitch() {
        this._videosService.isAudioSync = this._audioSyncElement.checked;
        this._soundElement.volume = this._pictureElement.volume;
        this._pictureElement.mute();
    }

    public onDelayChange() {
        this._soundElement.time = this._pictureElement.time - this._delayElement.value;
        this._videosService.delay = this._delayElement.value;
    }

    public onVideoTrackMove() {
        let pictureTime = this._pictureElement.time;
        if (Math.abs(this._prevTime - pictureTime) > 0.080 && this._videoSyncElement.checked === true) {
            this._soundElement.time = pictureTime - this._delayElement.value;
        }
        this._pictureRepository.time = pictureTime;
        this._soundRepository.time = this._soundElement.time;
        this._prevTime = pictureTime;
    }

    public restore() {
        this._delayElement.value = this._videosService.delay;
        this._videoSyncElement.checked = this._videosService.isVideoSync;
        this._audioSyncElement.checked = this._videosService.isAudioSync;
        this._soundElement.time = this._soundRepository.time;
        this._pictureElement.time = this._pictureRepository.time;
        this._prevTime = this._pictureElement.time;
    }
}

export default VideosController;