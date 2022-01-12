import EpisodeRepository from "./EpisodeRepository.js";

class PictureEpisodeRepository extends EpisodeRepository {
    private static readonly nameKey = 'picture-name';
    private static readonly indexKey = 'picture-index';
    private static readonly timeKey = 'picture-time';
    private static readonly numberKey = 'episode-number';

    set name(value: string) {
        this._dataContext.set(PictureEpisodeRepository.nameKey, value);
    }
    get name(): string {
        return this._dataContext.getValue(PictureEpisodeRepository.nameKey);
    }

    set index(value: number) {
        this._dataContext.set(PictureEpisodeRepository.indexKey, String(value));
    }
    get index(): number {
        return Number(this._dataContext.getValue(PictureEpisodeRepository.indexKey));
    }

    set number(value: number) {
        this._dataContext.set(PictureEpisodeRepository.numberKey, String(value));
    }
    get number(): number {
        return Number(this._dataContext.getValue(PictureEpisodeRepository.numberKey));
    }

    set time(value: number) {
        this._dataContext.set(PictureEpisodeRepository.timeKey, String(value));
    }
    get time(): number {
        return Number(this._dataContext.getValue(PictureEpisodeRepository.timeKey));
    }

}

export default PictureEpisodeRepository;