class DataContext {

    private _localStorage = window.localStorage;

    public contain(key: string): boolean {
        return this._localStorage.contain(key);
    }

    public add(key: string, value: string) {
        if (this.contain(key) === false) {
            throw new Error(`${key} exist !!!`)
        }
        this._localStorage.setItem(key, value);
    }

    public update(key: string, value: string) {
        if (this.contain(key)) {
            throw new Error(`${key} not exist !!!`)
        }
        this._localStorage.setItem(key, value);
    }

    public set(key: string, value: string) {
        this._localStorage.setItem(key, value);
    }

    public remove(key: string) {
        if (this.contain(key) === false) {
            throw new Error(`${key} not exist !!!`)
        }
        this._localStorage.removeItem(key);
    }

    public getValue(key: string): string {
        const item = this._localStorage.getItem(key);
        if (item === null) {
            throw new Error('Key not exist');
        }
        return item as string;
    }

}

export default DataContext;