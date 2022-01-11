import DataContext from "./DataContext.js";

class VideoRepository implements Repository {
    private _dataContext = new DataContext;
    
    get(key: string): string {
        return this._dataContext.getValue(key);
    }
    
    save(key: string, value: string) {
        this._dataContext.addOrUpdate(key, value);
    }

    remove(key: string){
        this._dataContext.remove(key);
    };

    contain(key: string){
        return this._dataContext.contain(key);
    }
}

export default VideoRepository;