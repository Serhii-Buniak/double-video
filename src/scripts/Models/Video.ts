import Episode from "./Episode.js";

class Video {
    private _episode?: Episode;
    readonly htmlElement: HTMLVideoElement;
    readonly folder?: string;
    static _isFullScreen: boolean = false;

    constructor(htmlElement: HTMLVideoElement, folderPath?: string) {
        this.htmlElement = htmlElement
        this.folder = folderPath;
    }

    public set episode(value: Episode) {
        this._episode = value;

    }

    static get isFullScreen(): boolean {
        return Video._isFullScreen;
    }


    public get episode(): Episode {
        if (this._episode !== undefined) {
            return this._episode as unknown as Episode
        } else {
            throw new Error("Episode is undefined")
        }

    }

    public get episodePath(): string {
        if (!this.folder) {
            throw new Error("Folder is undefined")
        }
        return this.folder + '/' + this.episode.numeratedName;
    }

    public play() {
        this.htmlElement.play();
    }

    public load() {
        this.htmlElement.load();
    }

    public isPaused() {
        return this.htmlElement.paused
    }

    public isMuted() {
        return this.htmlElement.muted;
    }

    public stop() {
        this.htmlElement.pause();
    }
    static fullscreenOff() {
        document.exitFullscreen();
        Video._isFullScreen = false;
    }
    public fullscreenOn() {
        if (Video._isFullScreen) {
            Video.fullscreenOff();
        }
        
        this.htmlElement.requestFullscreen();
        Video._isFullScreen = true;
    }

    public mute() {
        this.htmlElement.muted = true;
    }

    public unmute() {
        this.htmlElement.muted = false;
    }

    public switchPlaying() {
        if (this.isPaused()) {
            this.play();
        } else {
            this.stop();
        }
    }

    public switchSound() {
        if (this.isMuted() === false) {
            this.mute();
        } else {
            this.unmute();
        }
    }
    public switchFullscreen() {
        if (Video.isFullScreen) {
            Video.fullscreenOff();
        }
        else {
            this.fullscreenOn();
        }
    }
}
export default Video;