import PictureEpisodeController from '../Controllers/PictureEpisodeController.js';
import SoundEpisodeController from '../Controllers/SoundEpisodeController.js';
import PictureVideo from '../Models/PictureVideo.js';
import SoundVideo from '../Models/SoundVideo.js';
import EpisodeCounter from '../UI/EpisodeCounter.js';

const soundVideo = new SoundVideo();
const pictureVideo = new PictureVideo();

const soundController = new PictureEpisodeController();
const pictureController = new SoundEpisodeController();

const episodeCounter = new EpisodeCounter();

episodeCounter.icrementor.addEventListener('click', () => episodeCounter.value++);
episodeCounter.decrementor.addEventListener('click', () => episodeCounter.value--);

const selectorEventHandlerPairs: { selector: string, handled: EventListenerOrEventListenerObject }[] = [
    { selector: '#sound-play', handled: () => { soundVideo.element.switchPlaying() } },
    { selector: '#picture-play', handled: () => { pictureVideo.element.switchPlaying() } },
    { selector: '#sound-fullscreen', handled: () => { soundVideo.element.switchFullscreen() } },
    { selector: '#picture-fullscreen', handled: () => { pictureVideo.element.switchFullscreen() } },
    { selector: '#sound-mute', handled: () => { soundVideo.element.switchSound() } },
    { selector: '#picture-mute', handled: () => { soundVideo.element.switchSound() } },
    { selector: '#both-play', handled: bothPlay },
    { selector: '#ready', handled: ready },
]

selectorEventHandlerPairs.forEach((el) => {
    document.querySelector(el.selector)
        ?.addEventListener('click', el.handled);
})


function bothPlay() {
    if (pictureVideo.element.isPaused() != soundVideo.element.isPaused()) {
        pictureVideo.element.stop();
        soundVideo.element.stop();
    } else {
        soundVideo.element.switchPlaying()
        pictureVideo.element.switchPlaying()
    }
}

function ready() {
    soundVideo.element.unmute();
    pictureVideo.element.mute();
    pictureVideo.element.fullscreenOn();
}


let isShiftCliked = false;

document.addEventListener('keyup', (e) => {

    let evt = (window.event || e) as KeyboardEvent;
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
                soundVideo.element.switchSound()
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
})

