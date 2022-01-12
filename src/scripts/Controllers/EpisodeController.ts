import EpisodeRepository from '../Data/EpisodeRepository.js';
import PictureEpisodeRepository from '../Data/PictureEpisodeRepository.js';
import SoundEpisodeRepository from '../Data/SoundEpisodeRepository.js';
import EpisodeForm from '../UI/EpisodeForms/EpisodeForm.js';
import PictureEpisodeForm from '../UI/EpisodeForms/PictureEpisodeForm.js';
import SoundEpisodeForm from '../UI/EpisodeForms/SoundEpisodeForm.js';
import Episode from '../Models/Episode.js';
import PictureVideo from '../Models/PictureVideo.js';
import SoundVideo from '../Models/SoundVideo.js';
import Video from '../Models/Video.js';
import VideoTitle from '../UI/VideosTitles/VideoTitle.js';
import PictureVideoTitle from '../UI/VideosTitles/PictureVideoTitle.js';
import SoundVideoTitle from '../UI/VideosTitles/SoundVideoTitle.js';
import EpisodeCounter from '../UI/EpisodeCounter.js';

const pictureRepository: EpisodeRepository = new PictureEpisodeRepository();
const soundRepository: EpisodeRepository = new SoundEpisodeRepository();

const pictureVideo: Video = new PictureVideo();
const soundVideo: Video = new SoundVideo();

const pictureTitle: VideoTitle = new PictureVideoTitle();
const soundTitle: VideoTitle = new SoundVideoTitle();

const pictureForm: EpisodeForm = new PictureEpisodeForm();
const soundForm: EpisodeForm = new SoundEpisodeForm();

const episodeCounter = new EpisodeCounter();

restorePictureEpisode();
restoreSoundEpisode();

export function restorePictureEpisode() {
    restoreEpisode(pictureVideo, pictureRepository, pictureTitle, pictureForm);
}

export function restoreSoundEpisode() {
    restoreEpisode(soundVideo, soundRepository, soundTitle, soundForm);
}

function restoreEpisode(video: Video, repository: EpisodeRepository, videoTitle: VideoTitle, form: EpisodeForm) {
    try {
        video.episode = repository.episode;
        video.htmlElement.src = video.episodePath;

        videoTitle.value = video.episodePath;
        episodeCounter.value = video.episode.number

    } catch (error) {
        videoTitle.value = 'None';
        video.episode = new Episode('', 0, 0);
    }
    form.name = video.episode.name;
    form.index = video.episode.index;
}

function videoUpdate(video: Video, videoTitle: VideoTitle, repository: EpisodeRepository) {
    video.episode.number = episodeCounter.value;
    video.htmlElement.src = video.episodePath;

    videoTitle.value = video.episodePath
    repository.episode = video.episode;
}

export function onEpisodeCounterChange() {
    videoUpdate(pictureVideo, pictureTitle, pictureRepository);
    videoUpdate(soundVideo, soundTitle, soundRepository);

    pictureRepository.time = 0;
    soundRepository.time = 0;
}



class PictureController {

    private _repository = new PictureEpisodeRepository();
    private _video = new PictureVideo();
    private _title = new PictureVideoTitle();
    private _form = new PictureEpisodeForm();
    private _episodeCounter = new EpisodeCounter();

    public restoreEpisode() {
        try {
            this._video.episode = this._repository.episode;
            this._video.htmlElement.src = this._video.episodePath;

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
        this._video.htmlElement.src = this._video.episodePath;

        this._title.value = this._video.episodePath
        this._repository.episode = this._video.episode;

        this._repository.time = 0;
    }
}

class SoundController {

    private _repository = new SoundEpisodeRepository();
    private _video = new SoundVideo();
    private _title = new SoundVideoTitle();
    private _form = new SoundEpisodeForm();
    private _episodeCounter = new EpisodeCounter();

    public restoreEpisode() {
        try {
            this._video.episode = this._repository.episode;
            this._video.htmlElement.src = this._video.episodePath;

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
        this._video.htmlElement.src = this._video.episodePath;

        this._title.value = this._video.episodePath
        this._repository.episode = this._video.episode;

        this._repository.time = 0;
    }
}