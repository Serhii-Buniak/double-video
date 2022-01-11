import EpisodeRepository from '../Data/EpisodeRepository.js';
import { displayEpisodeName, displayEpisodeNumber, getInputEpisodeNumberme as getInputEpisodeNumber } from '../Events/EpisodeEvents.js';
import Video from '../Models/Video.js';

const episodeRepository = new EpisodeRepository;

const pictureVideo = new Video(document.getElementById('picture-video') as HTMLVideoElement, '/Picture/');
const soundVideo = new Video(document.getElementById('sound-video') as HTMLVideoElement, '/Sound/');

(function () {
    pictureVideo.episode = episodeRepository.restoreEpisode({
        name: 'picture-name',
        index: 'picture-index',
        number: 'episode-number'
    });

    soundVideo.episode = episodeRepository.restoreEpisode({
        name: 'picture-name',
        index: 'sound-index',
        number: 'sound-number'
    });

    pictureVideo.htmlElement.src = pictureVideo.episodePath;
    soundVideo.htmlElement.src = soundVideo.episodePath;

    displayEpisodeName('#js-picture-file', pictureVideo.episodePath);
    displayEpisodeName('#js-sound-file', soundVideo.episodePath);
    displayEpisodeNumber(pictureVideo.episode.number);
})();


export function onEpisodeChange() {
    const numberEpisode = getInputEpisodeNumber();

    pictureVideo.episode.number = numberEpisode;
    soundVideo.episode.number = numberEpisode;

    pictureVideo.htmlElement.src = pictureVideo.episodePath;
    soundVideo.htmlElement.src = soundVideo.episodePath;

    displayEpisodeName('#js-picture-file', pictureVideo.episode.name);
    displayEpisodeName('#js-sound-file', soundVideo.episode.name);

    episodeRepository.saveEpisode(pictureVideo.episode, {
        name: 'picture-name',
        index: 'picture-index',
        number: 'episode-number'
    });

    episodeRepository.saveEpisode(soundVideo.episode, {
        name: 'sound-name',
        index: 'sound-index',
        number: 'episode-number'
    });
}





// let formsInputs = [document.querySelector('#input-sound-name'),
// document.querySelector('#input-sound-index'),
// document.querySelector('#input-picture-file'),
// document.querySelector('#input-picture-index')];
// formsInputs.forEach((el) => {
//     el?.addEventListener('change', onFileFormChange)
// })
// function onFileFormChange() {

// }


// pictureVideo.episode = new Episode('/Picture/Bleach_[]_[AniLibria_TV]_[BDRip_1080p]_VP8.webm', '/Picture/Bleach_['.length);
// soundVideo.episode = new Episode('/Sound/Bleach - _VP8_155.webm', '/Sound/Bleach - '.length);