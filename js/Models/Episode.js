class Episode {
    constructor(name, index, number) {
        this._name = name;
        this._index = index;
        this._number = number;
    }
    get name() {
        return this._name;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
    }
    get numeratedName() {
        return this.name.insert(this.index, this.number.toString());
    }
    get index() {
        return this._index;
    }
}
export default Episode;
