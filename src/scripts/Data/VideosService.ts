import DataContext from "./DataContext.js";

class VideosService {

    protected readonly _dataContext = new DataContext;

    private static readonly isVideoSyncKey = 'video-sync';
    private static readonly isAudioSyncKey = 'audio-sync';
    private static readonly delayKey = 'delay';

    set isVideoSync(value: boolean) {
        this._dataContext.set(VideosService.isVideoSyncKey, String(value));
    }
    get isVideoSync(): boolean {
        return Boolean(this._dataContext.getValue(VideosService.isVideoSyncKey));
    }

    set isAudioSync(value: boolean) {
        this._dataContext.set(VideosService.isAudioSyncKey, String(value));
    }
    get isAudioSync(): boolean {
        return Boolean(this._dataContext.getValue(VideosService.isAudioSyncKey));
    }

    set delay(value: number) {
        this._dataContext.set(VideosService.delayKey, String(value))
    }
    get delay(): number {
        return Number(this._dataContext.getValue(VideosService.delayKey));
    }
}

export default VideosService;