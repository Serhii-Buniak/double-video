import Episode from "../Models/Episode.js";
import DataContext from "./DataContext.js";
class EpisodeRepository {
    constructor() {
        this._dataContext = new DataContext;
    }
    set episode(value) {
        this.name = value.name;
        this.index = value.index;
        this.number = value.number;
    }
    get episode() {
        return new Episode(this.name, this.index, this.number);
    }
}
export default EpisodeRepository;
