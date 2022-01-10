import DataContext from './Models/DataContext.js';
import Episode from './Models/Episode.js';
import Video from './Models/Video.js';

const dataContext = new DataContext;

const pictureElement = document.getElementById('picture-video') as HTMLVideoElement;
const pictureVideo = new Video(pictureElement);

const soundElement = document.getElementById('sound-video') as HTMLVideoElement;
const soundVideo = new Video(soundElement);

const inputEpisode = document.getElementById('episode-input') as HTMLInputElement;
inputEpisode.addEventListener('change', onEpisodeChange);

try {
    let picturePath = dataContext.getValue('picture-path');
    let soundPath = dataContext.getValue('sound-path');
    let pictureIndex = Number(dataContext.getValue('picture-index'));
    let soundIndex = Number(dataContext.getValue('sound-index'));
    let number = Number(dataContext.getValue('episode-number'));

    pictureVideo.episode = new Episode(picturePath, pictureIndex);
    soundVideo.episode = new Episode(soundPath, soundIndex);
    
    setSourceVideo(pictureElement, picturePath);
    setSourceVideo(soundElement, soundPath);
    displayPathNames('#js-picture-file', picturePath);
    displayPathNames('#js-sound-file', soundPath);
    displayEpisodeNumber(number);
} catch (error) {
    pictureVideo.episode = new Episode("", 0);
    soundVideo.episode = new Episode("", 0);
}

pictureVideo.episode = new Episode('/Picture/Bleach_[]_[AniLibria_TV]_[BDRip_1080p]_VP8.webm', '/Picture/Bleach_['.length);
soundVideo.episode = new Episode('/Sound/Bleach - _VP8_155.webm', '/Sound/Bleach - '.length);

function displayPathNames(selector: string, path: string) {
    const placeFilePath = document.querySelector(selector) as HTMLElement;
    placeFilePath.innerHTML = path;
}

function displayEpisodeNumber(value: number) {
    inputEpisode.value = value.toString();
}

function onEpisodeChange() {
    const numberEpisode = Number(inputEpisode.value);
    setEpisodeNumber(pictureVideo, numberEpisode);
    setEpisodeNumber(soundVideo, numberEpisode);

    const newPicturePath = pictureVideo.episode.name;
    const newSoundPath = soundVideo.episode.name;

    setSourceVideo(pictureElement, newPicturePath);
    setSourceVideo(soundElement, newSoundPath);

    displayPathNames('#js-picture-file', newPicturePath);
    displayPathNames('#js-sound-file', newSoundPath);
    try {
        dataContext.add('sound-path', soundVideo.episode.name);
        dataContext.add('picture-path', pictureVideo.episode.name);
        dataContext.add('sound-index', soundVideo.episode.index.toString());
        dataContext.add('picture-index', pictureVideo.episode.index.toString());
        dataContext.add('episode-number', numberEpisode.toString());

    } catch (error) {
        dataContext.update('soundPath', soundVideo.episode.name);
        dataContext.update('picturePath', pictureVideo.episode.name);
        dataContext.update('sound-index', soundVideo.episode.index.toString());
        dataContext.update('picture-index', pictureVideo.episode.index.toString());
        dataContext.update('episode-number', numberEpisode.toString());
    }
}

function setSourceVideo(video: HTMLVideoElement, path: string) {
    video.src = path;
}

function setEpisodeNumber(video: Video, value: number) {
    video.episode.number = value;
}

document.getElementById('number-decrement')?.addEventListener('click', () => {
    inputEpisode.value = (Number(inputEpisode.value) - 1).toString();
    onEpisodeChange();
})

document.getElementById('number-increment')?.addEventListener('click', () => {
    inputEpisode.value = (Number(inputEpisode.value) + 1).toString();
    onEpisodeChange();
})

