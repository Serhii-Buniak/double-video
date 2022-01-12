import EpisodeRepository from "../Data/EpisodeRepository.js";
import PictureEpisodeRepository from "../Data/PictureEpisodeRepository.js";
import SoundEpisodeRepository from "../Data/SoundEpisodeRepository.js";
import VideosService from "../Data/VideosService.js";

const videosService = new VideosService;
const pictureRepository: EpisodeRepository = new PictureEpisodeRepository
const soundRepository: EpisodeRepository = new SoundEpisodeRepository

const pictureElement = document.getElementById('picture-video') as HTMLVideoElement;
const soundElement = document.getElementById('sound-video') as HTMLVideoElement;

const delayElement = document.getElementById('delay') as HTMLInputElement;
const videoSyncElement = document.getElementById('video-sync') as HTMLInputElement;
const audioSyncElement = document.getElementById('audio-sync') as HTMLInputElement;

pictureElement.addEventListener('volumechange', () => {
    if (audioSyncElement.checked) {
        soundElement.volume = pictureElement.volume;
        setTimeout(() => { pictureElement.muted = true }, 2200);
    }

})

videoSyncElement.addEventListener('change', () => {
    if (videoSyncElement.checked === true) {
        soundElement.currentTime = pictureElement.currentTime - Number(delayElement.value);
    }

    videosService.isVideoSync = videoSyncElement.checked;
});

audioSyncElement.addEventListener('change', () => {
    videosService.isAudioSync = audioSyncElement.checked;
    soundElement.volume = pictureElement.volume;
    pictureElement.muted = true
});

delayElement.addEventListener('change', () => {
    soundElement.currentTime = pictureElement.currentTime - Number(delayElement.value);
    videosService.delay = Number(delayElement.value);
});

let prevTime: number;

delayElement.value = videosService.delay.toString();
videoSyncElement.checked = videosService.isVideoSync;
audioSyncElement.checked = videosService.isAudioSync;

soundElement.currentTime = soundRepository.time;


pictureElement.currentTime = pictureRepository.time
prevTime = pictureElement.currentTime


setInterval(() => {
    let pictureTime = pictureElement.currentTime;
    if (Math.abs(prevTime - pictureTime) > 0.080 && videoSyncElement.checked === true) {
        soundElement.currentTime = pictureTime - Number(delayElement.value);
    }
    pictureRepository.time = pictureTime;
    soundRepository.time = soundElement.currentTime;
    prevTime = pictureTime;
}, 5);

