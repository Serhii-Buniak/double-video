class VideoElement {
    constructor(htmlElement) {
        this._fullscreenId = Math.random();
        this._htmlElement = htmlElement;
    }
    play() {
        this._htmlElement.play();
    }
    stop() {
        this._htmlElement.pause();
    }
    get isPaused() {
        return this._htmlElement.paused;
    }
    load() {
        this._htmlElement.load();
    }
    set source(value) {
        this._htmlElement.src = value;
    }
    get source() {
        return this._htmlElement.src;
    }
    async fullscreenOn() {
        try {
            await document.exitFullscreen();
            this._htmlElement.requestFullscreen();
        }
        catch {
            this._htmlElement.requestFullscreen();
        }
        const random = Math.random();
        VideoElement._mainFullscreenId = random;
        this._fullscreenId = random;
    }
    async fullscreenOff() {
        await document.exitFullscreen();
        VideoElement._mainFullscreenId = Math.random();
        this._fullscreenId = Math.random();
    }
    async switchFullscreen() {
        if (this._fullscreenId === VideoElement._mainFullscreenId) {
            this.fullscreenOff();
            console.log('fullscreenOff');
        }
        else {
            this.fullscreenOn();
            console.log('fullscreenOn');
        }
    }
    mute() {
        this._htmlElement.muted = true;
    }
    unmute() {
        this._htmlElement.muted = false;
    }
    get isMuted() {
        return this._htmlElement.muted;
    }
    switchPlaying() {
        if (this.isPaused) {
            this.play();
        }
        else {
            this.stop();
        }
    }
    switchSound() {
        if (this.isMuted === false) {
            this.mute();
        }
        else {
            this.unmute();
        }
    }
    set time(value) {
        this._htmlElement.currentTime = value;
    }
    get time() {
        return this._htmlElement.currentTime;
    }
    set volume(value) {
        this._htmlElement.volume = value;
    }
    get volume() {
        return this._htmlElement.volume;
    }
    addEventListener(type, listener, options) {
        this._htmlElement.addEventListener(type, listener, options);
    }
    publicremoveEventListener(type, listener, options) {
        this._htmlElement.addEventListener(type, listener, options);
    }
}
VideoElement._mainFullscreenId = Math.random();
export default VideoElement;
