import SoundEpisodeRepository from "../Data/SoundEpisodeRepository.js";
import Episode from "../Models/Episode.js";
import SoundVideo from "../Models/SoundVideo.js";
import EpisodeCounter from "../UI/EpisodeCounter.js";
import SoundEpisodeForm from "../UI/EpisodeForms/SoundEpisodeForm.js";
import SoundVideoTitle from "../UI/VideosTitles/SoundVideoTitle.js";

class SoundEpisodeController {
    private _repository = new SoundEpisodeRepository();
    private _video = new SoundVideo();
    private _title = new SoundVideoTitle();
    private _form = new SoundEpisodeForm();
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

export default SoundEpisodeController;