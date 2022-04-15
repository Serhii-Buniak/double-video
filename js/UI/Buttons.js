class Button {
    constructor(htmlElement) {
        this._htmlElement = htmlElement;
    }
    get innerText() {
        return this._htmlElement.innerText;
    }
    get innerHTML() {
        return this._htmlElement.innerHTML;
    }
    addEventListener(type, listener, options) {
        this._htmlElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        this._htmlElement.addEventListener(type, listener, options);
    }
}
export class SoundPlayButton extends Button {
    constructor() {
        super(document.querySelector('#sound-play'));
    }
}
export class PicturePlayButton extends Button {
    constructor() {
        super(document.querySelector('#picture-play'));
    }
}
export class SoundFullscreenButton extends Button {
    constructor() {
        super(document.querySelector('#sound-fullscreen'));
    }
}
export class PictureFullscreenButton extends Button {
    constructor() {
        super(document.querySelector('#picture-fullscreen'));
    }
}
export class SoundMuteButton extends Button {
    constructor() {
        super(document.querySelector('#sound-mute'));
    }
}
export class PictureMuteButton extends Button {
    constructor() {
        super(document.querySelector('#picture-mute'));
    }
}
export class BothPlayButton extends Button {
    constructor() {
        super(document.querySelector('#both-play'));
    }
}
export class ReadyButton extends Button {
    constructor() {
        super(document.querySelector('#ready'));
    }
}
export default Button;
