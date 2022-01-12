import EpisodeRepository from "./EpisodeRepository.js";

class SoundEpisodeRepository extends EpisodeRepository {

    private static readonly nameKey = 'sound-name';
    private static readonly indexKey = 'sound-index';
    private static readonly timeKey = 'sound-time';
    private static readonly numberKey = 'episode-number';

    set name(value: string) {
        this._dataContext.set(SoundEpisodeRepository.nameKey, value);
    }
    get name(): string {
        return this._dataContext.getValue(SoundEpisodeRepository.nameKey);
    }

    set index(value: number) {
        this._dataContext.set(SoundEpisodeRepository.indexKey, String(value));
    }
    get index(): number {
        return Number(this._dataContext.getValue(SoundEpisodeRepository.indexKey));
    }

    set number(value: number) {
        this._dataContext.set(SoundEpisodeRepository.numberKey, String(value));
    }
    get number(): number {
        return Number(this._dataContext.getValue(SoundEpisodeRepository.numberKey));
    }

    set time(value: number) {
        this._dataContext.set(SoundEpisodeRepository.timeKey, String(value));
    }
    get time(): number {
        return Number(this._dataContext.getValue(SoundEpisodeRepository.timeKey));
    }
}

export default SoundEpisodeRepository;