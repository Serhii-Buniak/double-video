import Episode from "./Episode";

class Video {
    private _episode?: Episode;
    private _videoElement: HTMLVideoElement;

    constructor(videoElement: HTMLVideoElement) {
        this._videoElement = videoElement
    }

    public set episode(value: Episode) {
        this._episode = value;
    
    }
    
    public get episode(): Episode {
        if (this._episode !== undefined) {
            return this._episode as unknown as Episode
        }else{
            throw new Error("Episode is undefined")
        }
        
    }  

    public play() {
        this._videoElement.play();
    }

    public load() {
        this._videoElement.load();
    }

    public isPaused() {
        return this._videoElement.paused
    }

    public isMuted() {
        return this._videoElement.muted;
    }

    public stop() {
        this._videoElement.pause();
    }

    public fullscreenOn() {
        if (this._videoElement.requestFullscreen) {
            this._videoElement.requestFullscreen();
        }
    }

    public mute() {
        this._videoElement.muted = true;
    }

    public unmute() {
        this._videoElement.muted = false;
    }
}
export default Video;