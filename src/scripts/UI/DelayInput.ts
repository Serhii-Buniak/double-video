import InputElement from "./InputElement.js";

class DelayInput {
    private _inputElement = new InputElement('#delay');

    public set value(value: number) {
        this._inputElement.value = String(value);
    }
    public get value(): number {
        return Number(this._inputElement.value);
    }

    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this._inputElement.innerElement.addEventListener(type, listener, options);
    }
    public removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this._inputElement.innerElement.addEventListener(type, listener, options);
    }
}

export default DelayInput;