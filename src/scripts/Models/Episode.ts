class Episode {
    private _name: string;
    private _index: number;
    private _number: number;

    constructor(name: string, index: number, number: number) {
        this._name = name;
        this._index = index;
        this._number = number;
    }

    get number(): number {
        return this._number;
    }

    set number(value: number) {
        this._number = value;
    }

    get name() {
        return this._name;
    }

    get numeratedName() {
        return this.name.insert(this.index, this.number.toString());
    }

    get index() {
        return this._index;
    }
}

export default Episode;

