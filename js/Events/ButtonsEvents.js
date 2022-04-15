import { PicturePlayButton, PictureFullscreenButton, SoundFullscreenButton, SoundMuteButton, PictureMuteButton, BothPlayButton, ReadyButton } from './../UI/Buttons.js';
import PictureVideo from '../Models/PictureVideo.js';
import SoundVideo from '../Models/SoundVideo.js';
import { SoundPlayButton } from '../UI/Buttons.js';
import EpisodeCounter from '../UI/EpisodeCounter.js';
const soundVideo = new SoundVideo();
const pictureVideo = new PictureVideo();
const episodeCounter = new EpisodeCounter();
episodeCounter.icrementor.addEventListener('click', () => episodeCounter.value++);
episodeCounter.decrementor.addEventListener('click', () => episodeCounter.value--);
const soundPlayBtn = new SoundPlayButton();
const picturePlayBtn = new PicturePlayButton();
const soundFullscreenBtn = new SoundFullscreenButton();
const pictureFullscreenBtn = new PictureFullscreenButton();
const soundMuteBtn = new SoundMuteButton();
const pictureMuteBtn = new PictureMuteButton();
const bothPlayBtn = new BothPlayButton();
const readyBtn = new ReadyButton();
const selectorEventHandlerPairs = [
    { button: soundPlayBtn, handler: soundVideo.element.switchPlaying.bind(soundVideo.element) },
    { button: picturePlayBtn, handler: pictureVideo.element.switchPlaying.bind(pictureVideo.element) },
    { button: soundFullscreenBtn, handler: soundVideo.element.switchFullscreen.bind(soundVideo.element) },
    { button: pictureFullscreenBtn, handler: pictureVideo.element.switchFullscreen.bind(pictureVideo.element) },
    { button: soundMuteBtn, handler: soundVideo.element.switchSound.bind(soundVideo.element) },
    { button: pictureMuteBtn, handler: soundVideo.element.switchSound.bind(soundVideo.element) },
    { button: bothPlayBtn, handler: bothPlay },
    { button: readyBtn, handler: ready },
];
selectorEventHandlerPairs.forEach((el) => {
    el.button.addEventListener('click', el.handler);
});
function bothPlay() {
    if (pictureVideo.element.isPaused != soundVideo.element.isPaused) {
        pictureVideo.element.stop();
        soundVideo.element.stop();
    }
    else {
        soundVideo.element.switchPlaying();
        pictureVideo.element.switchPlaying();
    }
}
function ready() {
    soundVideo.element.unmute();
    pictureVideo.element.mute();
    pictureVideo.element.fullscreenOn();
}
(() => {
    let isShiftCliked = false;
    document.addEventListener('keyup', (e) => {
        let evt = (window.event || e);
        if (evt.key === 'Shift') {
            isShiftCliked = true;
            setTimeout(() => { isShiftCliked = false; }, 4000);
            return;
        }
        if (isShiftCliked) {
            switch (evt.code) {
                case 'KeyQ':
                    soundVideo.element.switchPlaying();
                    break;
                case 'KeyA':
                    soundVideo.element.switchFullscreen();
                    break;
                case 'KeyZ':
                    soundVideo.element.switchSound();
                    break;
                case 'KeyW':
                    bothPlay();
                    break;
                case 'KeyX':
                    ready();
                    break;
                case 'KeyE':
                    pictureVideo.element.switchPlaying();
                    break;
                case 'KeyD':
                    pictureVideo.element.switchFullscreen();
                    break;
                case 'KeyC':
                    pictureVideo.element.switchSound();
                    break;
                default:
                    isShiftCliked = false;
            }
        }
    });
})();
