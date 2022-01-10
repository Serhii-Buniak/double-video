import Video from './Models/Video.js';

const soundVideo = new Video(document.getElementById('sound-video') as HTMLVideoElement);
const pictureVideo = new Video(document.getElementById('picture-video') as HTMLVideoElement);

function setButtonEvent(selector: string, method: EventListenerOrEventListenerObject) {
    document.querySelector(selector)
        ?.addEventListener('click', method);
}
setButtonEvent('#sound-play', soundPlay);
setButtonEvent('#picture-play', picturePlay);
setButtonEvent('#sound-fullscreen', soundFullscreen);
setButtonEvent('#picture-fullscreen', pictureFullscreen);
setButtonEvent('#sound-mute', soundMute);
setButtonEvent('#picture-mute', pictureMute);
setButtonEvent('#both-play', bothPlay);
setButtonEvent('#ready', ready);


function soundPlay() {
    if (soundVideo.isPaused()) {
        soundVideo.play();
    } else {
        soundVideo.stop();
    }
}

function picturePlay() {
    if (pictureVideo.isPaused()) {
        pictureVideo.play();
    } else {
        pictureVideo.stop()
    }
}

function soundFullscreen() {
    soundVideo.fullscreenOn();
}

function pictureFullscreen() {
    pictureVideo.fullscreenOn();
}

function soundMute() {
    if (soundVideo.isMuted() === false) {
        soundVideo.mute();
    } else {
        soundVideo.unmute();
    }
}

function pictureMute() {
    if (pictureVideo.isMuted() === false) {
        pictureVideo.mute();
    } else {
        pictureVideo.unmute();
    }
}

function bothPlay() {
    if (pictureVideo.isPaused() != soundVideo.isPaused()) {
        pictureVideo.stop();
        soundVideo.stop();
    } else {
        picturePlay();
        soundPlay();
    }
}

function ready() {
    soundVideo.unmute();
    pictureVideo.unmute();
    pictureFullscreen();
}


let isShiftCliked = false;
document.addEventListener('keyup', (e) => {

    let evt = (window.event || e) as KeyboardEvent;
    if (evt.key === 'Shift') {
        isShiftCliked = true;
    } else {
        if (evt.code === 'KeyQ') {
            soundPlay();
        }
        if (evt.code === 'KeyA') {
            soundFullscreen();
        }
        if (evt.code === 'KeyZ') {
            soundMute();
        }

        if (evt.code === 'KeyW') {
            bothPlay();
        }
        if (evt.code === 'KeyX') {
            ready();
        }

        if (evt.code === 'KeyE') {
            picturePlay();
        }
        if (evt.code === 'KeyD') {
            pictureFullscreen();
        }
        if (evt.code === 'KeyC') {
            pictureMute();
        }
        isShiftCliked = false;
    }
})


