const soundVideo = document.getElementById('sound-video');
const pictureVideo = document.getElementById('picture-video');

function play(video) {
    video.play();
}

function load(video) {
    video.load();
}
function stop(video) {
    video.pause();
}

function fullscreen(video) {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
}

function mute(video) {
    video.muted = true;
}

function unmute(video) {
    video.muted = false;
}

////////////////////

function soundPlay() {
    if (soundVideo.paused) {
        play(soundVideo);
    } else {
        stop(soundVideo);
    }
}

function soundFullscreen() {
    fullscreen(soundVideo);

}

function soundMute() {
    if (soundVideo.muted === false) {
        mute(soundVideo);
    } else {
        unmute(soundVideo);
    }
}


function picturePlay() {
    if (pictureVideo.paused) {
        play(pictureVideo);
    } else {
        stop(pictureVideo);
    }
}

function pictureFullscreen() {
    fullscreen(pictureVideo);

}

function pictureMute() {
    if (pictureVideo.muted === false) {
        mute(pictureVideo);
    } else {
        unmute(pictureVideo);
    }
}

function bothPlay() {
    if (pictureVideo.paused != soundVideo.paused) {
        stop(pictureVideo);
        stop(soundVideo);
    } else {
        picturePlay();
        soundPlay();
    }
}

function ready() {
    unmute(soundVideo);
    mute(pictureVideo);
    pictureFullscreen();
}


let isShiftCliked = false;

document.addEventListener('keyup', (e) => {
    console.log(e);
    debugger;
    var evt = window.event || e;
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


