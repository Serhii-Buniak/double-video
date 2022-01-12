abstract class SyncCheckbox {
    protected abstract _htmlElement: HTMLInputElement;
    public set checked(value: boolean) {
        this._htmlElement.checked = value;
    }
    public get checked(): boolean {
        return this._htmlElement.checked;
    }

    get addEventListener() {
        return this._htmlElement.addEventListener;
    }

    get removeEventListener() {
        return this._htmlElement.removeEventListener;
    }
}
export default SyncCheckbox;


