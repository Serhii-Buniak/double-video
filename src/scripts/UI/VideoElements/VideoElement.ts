abstract class VideoElement {
    private _htmlElement: HTMLVideoElement
    private static _mainFullscreenId: number = Math.random();
    private _fullscreenId: number = Math.random();
    constructor(htmlElement: HTMLVideoElement) {
        this._htmlElement = htmlElement
    }

    public play() {
        this._htmlElement.play();
    }
    public stop() {
        this._htmlElement.pause();
    }
    public get isPaused(): boolean {
        return this._htmlElement.paused
    }

    public load() {
        this._htmlElement.load();
    }

    public set source(value: string) {
        this._htmlElement.src = value;
    }
    public get source(): string {
        return this._htmlElement.src;
    }

    public async fullscreenOn() {
        try {
            await document.exitFullscreen();
            this._htmlElement.requestFullscreen();
        } catch {
            this._htmlElement.requestFullscreen();
        }
        const random = Math.random();
        VideoElement._mainFullscreenId = random;
        this._fullscreenId = random;
    }
    public async fullscreenOff() {
        await document.exitFullscreen();
        VideoElement._mainFullscreenId = Math.random();
        this._fullscreenId = Math.random();
    }

    public async switchFullscreen() {
        if (this._fullscreenId === VideoElement._mainFullscreenId) {
            this.fullscreenOff();
            console.log('fullscreenOff');
        } else {
            this.fullscreenOn();
            console.log('fullscreenOn');
        }
    }

    public mute() {
        this._htmlElement.muted = true;
    }
    public unmute() {
        this._htmlElement.muted = false;
    }
    public get isMuted() {
        return this._htmlElement.muted;
    }

    public switchPlaying() {
        if (this.isPaused) {
            this.play();
        } else {
            this.stop();
        }
    }

    public switchSound() {
        if (this.isMuted === false) {
            this.mute();
        } else {
            this.unmute();
        }
    }



    public set time(value: number) {
        this._htmlElement.currentTime = value;
    }
    public get time(): number {
        return this._htmlElement.currentTime;
    }

    public set volume(value: number) {
        this._htmlElement.volume = value;
    }
    public get volume(): number {
        return this._htmlElement.volume;
    }

    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this._htmlElement.addEventListener(type, listener, options);
    }
    publicremoveEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this._htmlElement.addEventListener(type, listener, options);
    }
}

export default VideoElement;