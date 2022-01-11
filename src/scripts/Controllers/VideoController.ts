import VideoRepository from "../Data/VideoRepository.js";

const videoRepository = new VideoRepository;

const pictureElement = document.getElementById('picture-video') as HTMLVideoElement;
const soundElement = document.getElementById('sound-video') as HTMLVideoElement;

const delayElement = document.getElementById('delay') as HTMLInputElement;
const videoSync = document.getElementById('video-sync') as HTMLInputElement;
const audioSync = document.getElementById('audio-sync') as HTMLInputElement;

pictureElement.addEventListener('volumechange', () => {
    if (audioSync.checked) {
        soundElement.volume = pictureElement.volume;
        setTimeout(() => { pictureElement.muted = true }, 2200);
    }

})

videoSync.addEventListener('change', () => {
    if (videoSync.checked === true) {
        soundElement.currentTime = pictureElement.currentTime - Number(delayElement.value);
    }

    videoRepository.save('video-sync', `${videoSync.checked}`);
});

audioSync.addEventListener('change', () => {
    videoRepository.save('audio-sync', `${audioSync.checked}`);
    soundElement.volume = pictureElement.volume;
    pictureElement.muted = true
});

delayElement.addEventListener('change', () => {
    soundElement.currentTime = pictureElement.currentTime - Number(delayElement.value);
    videoRepository.save('delay', delayElement.value);
});

let prevTime: number;

if (videoRepository.contain('delay')) {
    delayElement.value = videoRepository.get('delay').toString();
}

if (videoRepository.contain('video-sync')) {
    videoSync.checked = videoRepository.get('video-sync') as any;
}

if (videoRepository.contain('audio-sync')) {
    audioSync.checked = videoRepository.get('audio-sync') as any;
}

if (videoRepository.contain('sound-time')) {
    soundElement.currentTime = Number(videoRepository.get('sound-time'));
}

if (videoRepository.contain('picture-time')) {
    pictureElement.currentTime = Number(videoRepository.get('picture-time'));
    prevTime = pictureElement.currentTime
}

setInterval(() => {
    let pictureTime = pictureElement.currentTime;
    if (Math.abs(prevTime - pictureTime) > 0.080 && videoSync.checked === true) {
        soundElement.currentTime = pictureTime - Number(delayElement.value);
    }
    videoRepository.save('picture-time', pictureTime.toString());
    videoRepository.save('sound-time', soundElement.currentTime.toString());
    prevTime = pictureTime;
}, 5);

