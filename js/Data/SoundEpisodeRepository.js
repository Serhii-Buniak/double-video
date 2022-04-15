import EpisodeRepository from "./EpisodeRepository.js";
class SoundEpisodeRepository extends EpisodeRepository {
    set name(value) {
        this._dataContext.set(SoundEpisodeRepository.nameKey, value);
    }
    get name() {
        return this._dataContext.getValue(SoundEpisodeRepository.nameKey);
    }
    set index(value) {
        this._dataContext.set(SoundEpisodeRepository.indexKey, String(value));
    }
    get index() {
        return Number(this._dataContext.getValue(SoundEpisodeRepository.indexKey));
    }
    set number(value) {
        this._dataContext.set(SoundEpisodeRepository.numberKey, String(value));
    }
    get number() {
        return Number(this._dataContext.getValue(SoundEpisodeRepository.numberKey));
    }
    set time(value) {
        this._dataContext.set(SoundEpisodeRepository.timeKey, String(value));
    }
    get time() {
        return Number(this._dataContext.getValue(SoundEpisodeRepository.timeKey));
    }
}
SoundEpisodeRepository.nameKey = 'sound-name';
SoundEpisodeRepository.indexKey = 'sound-index';
SoundEpisodeRepository.timeKey = 'sound-time';
SoundEpisodeRepository.numberKey = 'episode-number';
export default SoundEpisodeRepository;
