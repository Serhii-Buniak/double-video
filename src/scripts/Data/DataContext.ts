class DataContext {

    private _localStorage = window.localStorage;

    public contain(key: string) {

        let item: string | null = this._localStorage.getItem(key);
        return !!item;
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

    public addOrUpdate(key: string, value: string) {
        try {
            this.add(key, value);
        } catch (error) {
            this.update(key, value);
        }
    }

    public remove(key: string) {

        if (this.contain(key) == false) {
            throw new Error(`${key} not exist !!!`)
        }
        this._localStorage.removeItem(key);
    }

    public getValue(key: string): string {
        const value = this._localStorage.getItem(key);

        if (!!value) {
            return value as string;
        } else {
            throw new Error('Key not exist')
        }
    }

}

export default DataContext;