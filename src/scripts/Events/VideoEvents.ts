import Video from '../Models/Video.js';

const soundVideo = new Video(document.getElementById('sound-video') as HTMLVideoElement);
const pictureVideo = new Video(document.getElementById('picture-video') as HTMLVideoElement);

const selectorEventHandlerPairs: { selector: string, handled: EventListenerOrEventListenerObject }[] = [
    { selector: '#sound-play', handled: () => { soundVideo.switchPlaying } },
    { selector: '#picture-play', handled: () => { pictureVideo.switchPlaying } },
    { selector: '#sound-fullscreen', handled: () => { soundVideo.switchFullscreen } },
    { selector: '#picture-fullscreen', handled: () => { pictureVideo.switchFullscreen } },
    { selector: '#sound-mute', handled: () => { soundVideo.switchSound } },
    { selector: '#picture-mute', handled: () => { soundVideo.switchSound } },
    { selector: '#both-play', handled: bothPlay },
    { selector: '#ready', handled: ready },
]

selectorEventHandlerPairs.forEach((el) => {
    document.querySelector(el.selector)
        ?.addEventListener('click', el.handled);
})


function bothPlay() {
    if (pictureVideo.isPaused() != soundVideo.isPaused()) {
        pictureVideo.stop();
        soundVideo.stop();
    } else {
        soundVideo.switchPlaying()
        pictureVideo.switchPlaying()
    }
}

function ready() {
    soundVideo.unmute();
    pictureVideo.unmute();
    pictureVideo.fullscreenOn();
}

(function () {
    let isShiftCliked = false;

    document.addEventListener('keyup', (e) => {
        
        let evt = (window.event || e) as KeyboardEvent;
        if (evt.key === 'Shift') {
            isShiftCliked = true;
            setTimeout(() => { isShiftCliked = false; }, 1300);
        }
        
        if (isShiftCliked) {
            switch (evt.code) {
                case 'KeyQ':
                    soundVideo.switchPlaying();
                    break;
                case 'KeyA':
                    soundVideo.switchFullscreen();
                    break;
                case 'KeyZ':
                    soundVideo.switchSound()
                    break;
                case 'KeyW':
                    bothPlay();
                    break;
                case 'KeyX':
                    ready();
                    break;
                case 'KeyE':
                    pictureVideo.switchPlaying();
                    break;
                case 'KeyW':
                    pictureVideo.switchFullscreen();
                    break;
                case 'KeyC':
                    pictureVideo.switchSound();
                    break;
                default:
                    isShiftCliked = false;
            }
        }
    })
})()