import SoundEpisodeController from "../Controllers/SoundEpisodeController";
import EpisodeCounter from "../UI/EpisodeCounter";
import SoundEpisodeForm from "../UI/EpisodeForms/SoundEpisodeForm";

const controller = new SoundEpisodeController();
const form = new SoundEpisodeForm();
const episodeCounter = new EpisodeCounter();

document.addEventListener("DOMContentLoaded", controller.restoreEpisode);

episodeCounter.addEventListener('change', controller.onEpisodeCounterChange);

form.indexAddEventListener('change', controller.onFormChange);
form.nameAddEventListener('change', controller.onFormChange)

episodeCounter.icrementor.addEventListener('click', () => {
    episodeCounter.value++;
})

episodeCounter.decrementor.addEventListener('click', () => {
    episodeCounter.value--;
})