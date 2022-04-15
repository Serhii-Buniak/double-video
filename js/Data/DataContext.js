class DataContext {
    constructor() {
        this._localStorage = window.localStorage;
    }
    contain(key) {
        return this._localStorage.contain(key);
    }
    add(key, value) {
        if (this.contain(key) === false) {
            throw new Error(`${key} exist !!!`);
        }
        this._localStorage.setItem(key, value);
    }
    update(key, value) {
        if (this.contain(key)) {
            throw new Error(`${key} not exist !!!`);
        }
        this._localStorage.setItem(key, value);
    }
    set(key, value) {
        this._localStorage.setItem(key, value);
    }
    remove(key) {
        if (this.contain(key) === false) {
            throw new Error(`${key} not exist !!!`);
        }
        this._localStorage.removeItem(key);
    }
    getValue(key) {
        const item = this._localStorage.getItem(key);
        if (item === null) {
            throw new Error('Key not exist');
        }
        return item;
    }
}
export default DataContext;
