import Episode from "../Models/Episode";
import DataContext from "./DataContext";
type episodeDataKeys = { name: string, index: string, number: string }

class EpisodeRepository {

    private _dataContext = new DataContext;

    restoreEpisode(keys: episodeDataKeys) {
        let name = this._dataContext.getValue(keys.name);
        let index = Number(this._dataContext.getValue(keys.index));
        let number = Number(this._dataContext.getValue(keys.number));

        return new Episode(name, index, number);
    }

    saveEpisode(episode: Episode, keys: episodeDataKeys) {
        this._dataContext.addOrUpdate(keys.name, episode.name);
        this._dataContext.addOrUpdate(keys.index, episode.index.toString());
        this._dataContext.addOrUpdate(keys.number, episode.number.toString());
    }
}

export default EpisodeRepository;
