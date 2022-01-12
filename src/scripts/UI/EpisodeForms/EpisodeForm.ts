import InputElement from "../InputElement";

abstract class EpisodeForm {
    protected abstract nameInput: InputElement<string>;
    protected abstract indexInput: InputElement<number>;

    public set name(value: string) {
        this.nameInput.value = String(value);
    }
    public get name(): string {
        return this.nameInput.value;
    }

    public set index(value: number) {
        this.indexInput.value = value;
    }
    public get index(): number {
        return this.indexInput.value;
    }

    indexAddEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this.nameInput.innerElement.addEventListener(type, listener, options);
    }
    indexRemoveEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this.nameInput.innerElement.addEventListener(type, listener, options);
    }

    nameAddEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this.indexInput.innerElement.addEventListener(type, listener, options);
    }
    nameRemoveEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void {
        this.indexInput.innerElement.addEventListener(type, listener, options);
    }
}


export default EpisodeForm;

