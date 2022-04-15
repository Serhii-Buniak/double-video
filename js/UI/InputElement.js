class InputElement {
    constructor(selector) {
        this.innerElement = document.querySelector(selector);
    }
    get value() {
        return this.innerElement.value;
    }
    set value(value) {
        this.innerElement.value = String(value);
    }
}
export default InputElement;
