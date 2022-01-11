import { onEpisodeChange } from "../Controllers/EpisodeController.js";
import EpisodeRepository from "../Data/EpisodeRepository.js";
import VideoRepository from "../Data/VideoRepository.js";
import Episode from "../Models/Episode.js";

const episodeRepository = new EpisodeRepository;
const videoRepository = new VideoRepository;

const inputEpisode = document.getElementById('episode-input') as HTMLInputElement;
inputEpisode.addEventListener('change', onEpisodeChange);

export function displayEpisodeName(selector: string, path: string) {
    const placeFilePath = document.querySelector(selector) as HTMLElement;
    placeFilePath.innerHTML = path;
}

export function displayEpisodeNumber(number: number) {

    inputEpisode.value = number.toString();
}

export function getInputEpisodeNumber() {
    return Number(inputEpisode.value);
}

document.getElementById('number-decrement')?.addEventListener('click', () => {
    inputEpisode.value = (Number(inputEpisode.value) - 1).toString();
    onEpisodeChange();
})

document.getElementById('number-increment')?.addEventListener('click', () => {
    inputEpisode.value = (Number(inputEpisode.value) + 1).toString();
    onEpisodeChange();
})

export function setFormEvent(form: episodeForm, dataKeys: episodeDataKeys, restoreFunction: Function) {

    for (const key in form) {
        let anyForm = form as any;
        let value = anyForm[key] as HTMLInputElement;

        value.addEventListener('change', () => {
            if(form.name.value === ''){
                form.name.value = '';
            }
            episodeRepository.save(dataKeys, new Episode(form.name.value, Number(form.index.value), getInputEpisodeNumber()));
            restoreFunction();
        });

    }
}




