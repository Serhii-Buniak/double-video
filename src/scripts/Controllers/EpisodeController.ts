import EpisodeRepository from '../Data/EpisodeRepository.js';
import { displayEpisodeName, displayEpisodeNumber, getInputEpisodeNumber as getInputEpisodeNumber, setFormEvent } from '../Events/EpisodeEvents.js';
import Episode from '../Models/Episode.js';
import Video from '../Models/Video.js';

const episodeRepository = new EpisodeRepository;

let pictureVideo = new Video(document.getElementById('picture-video') as HTMLVideoElement, '/Picture');
let soundVideo = new Video(document.getElementById('sound-video') as HTMLVideoElement, '/Sound');

const pictureKeys: episodeDataKeys = {
    name: 'picture-name',
    index: 'picture-index',
    number: 'episode-number'
}
const soundKeys: episodeDataKeys = {
    name: 'sound-name',
    index: 'sound-index',
    number: 'episode-number'
}

const pictureDisplaySelector: string = '#js-picture-file';
const soundDisplaySelector: string = '#js-sound-file';

const pictureForm: episodeForm = {
    name: document.querySelector('#input-picture-name') as HTMLInputElement,
    index: document.querySelector('#input-picture-index') as HTMLInputElement
}
const soundForm: episodeForm = {
    name: document.querySelector('#input-sound-name') as HTMLInputElement,
    index: document.querySelector('#input-sound-index') as HTMLInputElement
};

setFormEvent(pictureForm, pictureKeys, restorePictureEpisode);
setFormEvent(soundForm, soundKeys, restoreSoundEpisode);

restorePictureEpisode();
restoreSoundEpisode();

function restorePictureEpisode() {
    restoreEpisode(pictureVideo, pictureDisplaySelector, pictureKeys, pictureForm);
}

function restoreSoundEpisode() {
    restoreEpisode(soundVideo, soundDisplaySelector, soundKeys, soundForm);
}

function restoreEpisode(video: Video, displaySelector: string, dataKeys: episodeDataKeys, form: episodeForm) {
    try {
        video.episode = episodeRepository.get(dataKeys);

        video.htmlElement.src = video.episodePath;
        displayEpisodeName(displaySelector, video.episodePath);
        displayEpisodeNumber(video.episode.number);
    } catch (error) {
        displayEpisodeName(displaySelector, 'None');
        video.episode = new Episode('', 0, 0);
    }
    form.name.value = video.episode.name;
    form.index.value = video.episode.index.toString();

    video.htmlElement.load();
}

export function onEpisodeChange() {
    videoUpdate(pictureVideo, pictureDisplaySelector, pictureKeys);
    videoUpdate(soundVideo, soundDisplaySelector, soundKeys);
}

function videoUpdate(video: Video, displaySelector: string, dataKeys: episodeDataKeys) {
    const numberEpisode = getInputEpisodeNumber();
    video.episode.number = numberEpisode;
    video.htmlElement.src = encodeURI(video.episodePath);
    
    console.log('=========');
    console.log(video.episodePath);
    console.log(encodeURI(video.episodePath));
    console.log(decodeURI(encodeURI(video.episodePath)));
    console.log('=========');

    displayEpisodeName(displaySelector, video.episodePath);

    episodeRepository.save(video.episode, dataKeys);
}

