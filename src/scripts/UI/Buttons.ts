abstract class Button {
    private _htmlElement: HTMLElement;

    constructor(htmlElement: HTMLElement) {
        this._htmlElement = htmlElement;
    }

    public get innerText(): string {
        return this._htmlElement.innerText;
    }

    public get innerHTML(): string {
        return this._htmlElement.innerHTML;
    }

    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this._htmlElement.addEventListener(type, listener, options);
    }
    public removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this._htmlElement.addEventListener(type, listener, options);
    }
}
export class SoundPlayButton extends Button {
    constructor() {
        super(document.querySelector('#sound-play') as HTMLElement);
    }
}

export class PicturePlayButton extends Button {
    constructor() {
        super(document.querySelector('#picture-play') as HTMLElement);
    }
}

export class SoundFullscreenButton extends Button {
    constructor() {
        super(document.querySelector('#sound-fullscreen') as HTMLElement);
    }
}

export class PictureFullscreenButton extends Button {
    constructor() {
        super(document.querySelector('#picture-fullscreen') as HTMLElement);
    }
}

export class SoundMuteButton extends Button {
    constructor() {
        super(document.querySelector('#sound-mute') as HTMLElement);
    }
}

export class PictureMuteButton extends Button {
    constructor() {
        super(document.querySelector('#picture-mute') as HTMLElement);
    }
}

export class BothPlayButton extends Button {
    constructor() {
        super(document.querySelector('#both-play') as HTMLElement);
    }
}

export class ReadyButton extends Button {
    constructor() {
        super(document.querySelector('#ready') as HTMLElement);
    }
}

export default Button;