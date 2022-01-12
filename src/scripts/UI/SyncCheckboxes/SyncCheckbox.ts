import InputElement from "../InputElement.js";

abstract class SyncCheckbox {
    protected abstract inputElement: InputElement<boolean>;
    public set checked(value: boolean) {
        this.inputElement.innerElement.checked = value;
    }
    public get checked(): boolean {
        return this.inputElement.innerElement.checked;
    }

    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this.inputElement.innerElement.addEventListener(type, listener, options);
    }
    public removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this.inputElement.innerElement.addEventListener(type, listener, options);
    }
}
export default SyncCheckbox;


