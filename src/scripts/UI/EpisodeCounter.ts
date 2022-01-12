import InputElement from "./InputElement.js";

class EpisodeCounter {

    private _inputElement = new InputElement<number>('#episode-input');
    public readonly icrementor = new Incrementor();
    public readonly decrementor = new Decrementor();

    public get value(): number {
        return this._inputElement.value;
    }
    public set value(value: number) {
        this._inputElement.value = value;
    }

    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this._inputElement.innerElement.addEventListener(type, listener, options);
    }
    public removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this._inputElement.innerElement.addEventListener(type, listener, options);
    }
}

abstract class CounterOperator {

    protected abstract htmlElement: HTMLElement;

    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this.htmlElement.addEventListener(type, listener, options);
    }
    public removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this.htmlElement.addEventListener(type, listener, options);
    }
}

class Incrementor extends CounterOperator {
    htmlElement = document.querySelector('#number-increment') as HTMLElement;
}

class Decrementor extends CounterOperator {
    htmlElement = document.querySelector('#number-decrement') as HTMLElement;
}

export default EpisodeCounter