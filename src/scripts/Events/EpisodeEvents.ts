import { onEpisodeChange } from "../Controllers/EpisodeController";

const inputEpisode = document.getElementById('episode-input') as HTMLInputElement;
inputEpisode.addEventListener('change', onEpisodeChange);

export function displayEpisodeName(selector: string, path: string) {
    const placeFilePath = document.querySelector(selector) as HTMLElement;
    placeFilePath.innerHTML = path;
}

export function displayEpisodeNumber(number: number) {
    inputEpisode.value = number.toString();
}

export function getInputEpisodeNumberme() {
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