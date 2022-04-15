import DataContext from "./DataContext.js";
class VideosService {
    constructor() {
        this._dataContext = new DataContext;
    }
    set isVideoSync(value) {
        this._dataContext.set(VideosService.isVideoSyncKey, String(value));
    }
    get isVideoSync() {
        return Boolean(this._dataContext.getValue(VideosService.isVideoSyncKey));
    }
    set isAudioSync(value) {
        this._dataContext.set(VideosService.isAudioSyncKey, String(value));
    }
    get isAudioSync() {
        return Boolean(this._dataContext.getValue(VideosService.isAudioSyncKey));
    }
    set delay(value) {
        this._dataContext.set(VideosService.delayKey, String(value));
    }
    get delay() {
        return Number(this._dataContext.getValue(VideosService.delayKey));
    }
}
VideosService.isVideoSyncKey = 'video-sync';
VideosService.isAudioSyncKey = 'audio-sync';
VideosService.delayKey = 'delay';
export default VideosService;
