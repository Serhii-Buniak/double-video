class DelayInput {
    private _htmlElement = document.querySelector('#delay') as HTMLInputElement;

    public set value(value: number) {
        this._htmlElement.value = String(value);
    }
    public get value(): number {
        return Number(this._htmlElement.value);
    }

    get addEventListener() {
        return this._htmlElement.addEventListener;
    }
    get removeEventListener() {
        return this._htmlElement.removeEventListener;
    }
}

export default DelayInput;