abstract class VideoElement {
    protected abstract htmlElement: HTMLVideoElement
    static _isFullScreen: boolean = false;

    public play() {
        this.htmlElement.play();
    }
    public stop() {
        this.htmlElement.pause();
    }
    public isPaused() {
        return this.htmlElement.paused
    }

    public load() {
        this.htmlElement.load();
    }

    public set source(value: string) {
        this.htmlElement.src = value;
    }
    public get source(): string {
        return this.htmlElement.src;
    }

    public fullscreenOn() {
        if (VideoElement.isFullScreen) {
            VideoElement.fullscreenOff();
        }
        this.htmlElement.requestFullscreen();
        VideoElement._isFullScreen = true;
    }
    private static fullscreenOff() {
        document.exitFullscreen();
        VideoElement._isFullScreen = false;
    }
    public static get isFullScreen(): boolean {
        return VideoElement._isFullScreen;
    }

    public mute() {
        this.htmlElement.muted = true;
    }
    public unmute() {
        this.htmlElement.muted = false;
    }
    public isMuted() {
        return this.htmlElement.muted;
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

    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this.htmlElement.addEventListener(type, listener, options);
    }
    publicremoveEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this.htmlElement.addEventListener(type, listener, options);
    }
}

export default VideoElement;