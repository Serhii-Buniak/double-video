import InputElement from "./InputElement.js";
class EpisodeCounter {
    constructor() {
        this._inputElement = new InputElement('#episode-input');
        this.icrementor = new Incrementor();
        this.decrementor = new Decrementor();
    }
    get value() {
        return this._inputElement.value;
    }
    set value(value) {
        this._inputElement.value = value;
    }
    addEventListener(type, listener, options) {
        this._inputElement.innerElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        this._inputElement.innerElement.addEventListener(type, listener, options);
    }
}
class CounterOperator {
    addEventListener(type, listener, options) {
        this.htmlElement.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
        this.htmlElement.addEventListener(type, listener, options);
    }
}
class Incrementor extends CounterOperator {
    constructor() {
        super(...arguments);
        this.htmlElement = document.querySelector('#number-increment');
    }
}
class Decrementor extends CounterOperator {
    constructor() {
        super(...arguments);
        this.htmlElement = document.querySelector('#number-decrement');
    }
}
export default EpisodeCounter;
