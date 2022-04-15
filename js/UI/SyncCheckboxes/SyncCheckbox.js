class SyncCheckbox {
    set checked(value) {
        this.inputElement.innerElement.checked = value;
    }
    get checked() {
        return this.inputElement.innerElement.checked;
    }
    addEventListener(type, listener, options) {
        this.inputElement.innerElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        this.inputElement.innerElement.addEventListener(type, listener, options);
    }
}
export default SyncCheckbox;
