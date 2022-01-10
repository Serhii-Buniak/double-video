class Episode {
    private _name: string;
    private _index: number;
    private _number?: number;

    constructor(name: string, index: number) {
        this._name = name;
        this._index = index;
    }

    get number(): number {
        if (this._number !== undefined) {
            return this._number as number;
        } else {
            throw new Error("Episode is undefined")
        }
    }

    set number(value: number) {
        this._number = value;
    }

    get name() {
        return this._name.insert(this._index, this.number.toString());
    }

    get index() {
        return this._index;
    }
}

export default Episode;
