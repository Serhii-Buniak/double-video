class EpisodeForm {
    set name(value) {
        this.nameInput.value = String(value);
    }
    get name() {
        return this.nameInput.value;
    }
    set index(value) {
        this.indexInput.value = value;
    }
    get index() {
        return this.indexInput.value;
    }
    indexAddEventListener(type, listener, options) {
        this.nameInput.innerElement.addEventListener(type, listener, options);
    }
    indexRemoveEventListener(type, listener, options) {
        this.nameInput.innerElement.addEventListener(type, listener, options);
    }
    nameAddEventListener(type, listener, options) {
        this.indexInput.innerElement.addEventListener(type, listener, options);
    }
    nameRemoveEventListener(type, listener, options) {
        this.indexInput.innerElement.addEventListener(type, listener, options);
    }
}
export default EpisodeForm;
