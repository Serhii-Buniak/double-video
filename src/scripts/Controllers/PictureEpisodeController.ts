import PictureEpisodeRepository from '../Data/PictureEpisodeRepository.js';
import PictureEpisodeForm from '../UI/EpisodeForms/PictureEpisodeForm.js';
import Episode from '../Models/Episode.js';
import PictureVideo from '../Models/PictureVideo.js';
import PictureVideoTitle from '../UI/VideosTitles/PictureVideoTitle.js';
import EpisodeCounter from '../UI/EpisodeCounter.js';

class PictureEpisodeController {
    private _repository = new PictureEpisodeRepository();
    private _video = new PictureVideo();
    private _title = new PictureVideoTitle();
    private _form = new PictureEpisodeForm();
    private _episodeCounter = new EpisodeCounter();

    public restore() {
        try {
            this._video.episode = this._repository.episode;
            this._video.element.source = this._video.episodePath;

            this._title.value = this._video.episodePath;
            this._episodeCounter.value = this._video.episode.number

        } catch (error) {
            this._title.value = 'None';
            this._video.episode = new Episode('', 0, 0);
        }
        this._form.name = this._video.episode.name;
        this._form.index = this._video.episode.index;
    }

    public onEpisodeCounterChange() {
        this._video.episode.number = this._episodeCounter.value;
        this._video.element.source = this._video.episodePath;

        this._title.value = this._video.episodePath
        this._repository.episode = this._video.episode;

        this._repository.time = 0;
    }

    public onFormChange() {
        this._repository.episode = new Episode(this._form.name, this._form.index, this._episodeCounter.value)
        this.restore();
    }
}

export default PictureEpisodeController