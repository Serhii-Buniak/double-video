import Episode from "../Models/Episode.js";
import DataContext from "./DataContext.js";

class EpisodeRepository implements Repository {
    
    private _dataContext = new DataContext;

    get(keys: episodeDataKeys) {
        let name = this._dataContext.getValue(keys.name);
        let index = Number(this._dataContext.getValue(keys.index));
        let number = Number(this._dataContext.getValue(keys.number));

        return new Episode(name, index, number);
    }

    save(keys: episodeDataKeys, episode: Episode) {
        this._dataContext.addOrUpdate(keys.name, episode.name);
        this._dataContext.addOrUpdate(keys.index, episode.index.toString());
        this._dataContext.addOrUpdate(keys.number, episode.number.toString());
    }

    remove(keys: episodeDataKeys) {
        this._dataContext.remove(keys.name);
        this._dataContext.remove(keys.index);
        this._dataContext.remove(keys.number);   
    }
}

export default EpisodeRepository;
