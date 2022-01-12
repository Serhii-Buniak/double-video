class InputElement<T>{
    public readonly innerElement: HTMLInputElement;

    constructor(selector: string) {
        this.innerElement = document.querySelector(selector) as HTMLInputElement;
    }

    public get value() : T {
        return this.innerElement.value as unknown as T;
    }
    public set value(value : T) {
        this.innerElement.value = String(value);
    }
}

export default InputElement;