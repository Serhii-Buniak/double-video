abstract class VideoElement {
    protected abstract htmlElement: HTMLVideoElement
    static _isFullScreen: boolean = false;
    set source(value: string) {
        this.htmlElement.src = value;
    }
    get source(): string {
        return this.htmlElement.src;
    }

    static get isFullScreen(): boolean {
        return VideoElement._isFullScreen;
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
        VideoElement._isFullScreen = false;
    }
    public fullscreenOn() {
        if (VideoElement._isFullScreen) {
            VideoElement.fullscreenOff();
        }
        this.htmlElement.requestFullscreen();
        VideoElement._isFullScreen = true;
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
        if (VideoElement.isFullScreen) {
            VideoElement.fullscreenOff();
        }
        else {
            this.fullscreenOn();
        }
    }

    public set time(value: number) {
        this.htmlElement.currentTime = value;
    }
    public get time(): number {
        return this.htmlElement.currentTime;
    }

    public set volume(value: number) {
        this.htmlElement.volume = value;
    }
    public get volume(): number {
        return this.htmlElement.volume;
    }

    get addEventListener() {
        return this.htmlElement.addEventListener;
    }
    get removeEventListener() {
        return this.htmlElement.removeEventListener;
    }
}

export default VideoElement;