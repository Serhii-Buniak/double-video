import PictureEpisodeController from "../Controllers/PictureEpisodeController";
import EpisodeCounter from "../UI/EpisodeCounter";
import PictureEpisodeForm from "../UI/EpisodeForms/PictureEpisodeForm";

const controller = new PictureEpisodeController();
const form = new PictureEpisodeForm();
const episodeCounter = new EpisodeCounter();

document.addEventListener("DOMContentLoaded", controller.restore);

episodeCounter.addEventListener('change', controller.onEpisodeCounterChange);

episodeCounter.icrementor.addEventListener('click', () =>  episodeCounter.value++);
episodeCounter.decrementor.addEventListener('click', () => episodeCounter.value--);

form.indexAddEventListener('change', controller.onFormChange);
form.nameAddEventListener('change', controller.onFormChange)