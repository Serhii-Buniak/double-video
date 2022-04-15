import InputElement from "./InputElement.js";
class DelayInput {
    constructor() {
        this._inputElement = new InputElement('#delay');
    }
    set value(value) {
        this._inputElement.value = String(value);
    }
    get value() {
        return Number(this._inputElement.value);
    }
    addEventListener(type, listener, options) {
        this._inputElement.innerElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        this._inputElement.innerElement.addEventListener(type, listener, options);
    }
}
export default DelayInput;
