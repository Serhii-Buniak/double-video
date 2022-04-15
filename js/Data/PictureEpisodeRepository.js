import EpisodeRepository from "./EpisodeRepository.js";
class PictureEpisodeRepository extends EpisodeRepository {
    set name(value) {
        this._dataContext.set(PictureEpisodeRepository.nameKey, value);
    }
    get name() {
        return this._dataContext.getValue(PictureEpisodeRepository.nameKey);
    }
    set index(value) {
        this._dataContext.set(PictureEpisodeRepository.indexKey, String(value));
    }
    get index() {
        return Number(this._dataContext.getValue(PictureEpisodeRepository.indexKey));
    }
    set number(value) {
        this._dataContext.set(PictureEpisodeRepository.numberKey, String(value));
    }
    get number() {
        return Number(this._dataContext.getValue(PictureEpisodeRepository.numberKey));
    }
    set time(value) {
        this._dataContext.set(PictureEpisodeRepository.timeKey, String(value));
    }
    get time() {
        return Number(this._dataContext.getValue(PictureEpisodeRepository.timeKey));
    }
}
PictureEpisodeRepository.nameKey = 'picture-name';
PictureEpisodeRepository.indexKey = 'picture-index';
PictureEpisodeRepository.timeKey = 'picture-time';
PictureEpisodeRepository.numberKey = 'episode-number';
export default PictureEpisodeRepository;
