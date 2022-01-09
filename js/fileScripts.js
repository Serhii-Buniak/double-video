function getSoundFile(number) {
    return `/Sound/Bleach - ${number}_VP8.webm`
}

function getPictureFile(number) {
    return `/Picture/Bleach_[${number}]_[AniLibria_TV]_[BDRip_1080p]_VP8.webm`
}

const input = document.getElementById('episode-input');
input.addEventListener('change', onEpisodeChange);

function setPathNames(number) {
    const placeForPictureFilePath = document.getElementById('js-picture-file');
    placeForPictureFilePath.innerHTML = getPictureFile(number);

    const placeForSoundFilePath = document.getElementById('js-sound-file');
    placeForSoundFilePath.innerHTML = getSoundFile(number);
}
function onEpisodeChange() {
    const numberEpisode = input.value;
    const soundFile = getSoundFile(numberEpisode);
    const pictureFile = getPictureFile(numberEpisode);
    setSrcVideo(soundVideo, soundFile);
    setSrcVideo(pictureVideo, pictureFile);
    
    setPathNames(numberEpisode);
}

function setSrcVideo(video, path) {
    video.src = path;
}

document.getElementById('number-decrement').addEventListener('click', () => {
    input.value--;
    onEpisodeChange();
})

document.getElementById('number-increment').addEventListener('click', () => {
    input.value++;
    onEpisodeChange();
})