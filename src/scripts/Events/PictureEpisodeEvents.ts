import PictureEpisodeController from "../Controllers/PictureEpisodeController.js";
import EpisodeCounter from "../UI/EpisodeCounter.js";
import PictureEpisodeForm from "../UI/EpisodeForms/PictureEpisodeForm.js";

const controller = new PictureEpisodeController();
const form = new PictureEpisodeForm();
const episodeCounter = new EpisodeCounter();

document.addEventListener("DOMContentLoaded", controller.restore.bind(controller));

episodeCounter.addEventListener('change', controller.onEpisodeCounterChange.bind(controller))

episodeCounter.icrementor.addEventListener('click', () => {
    setTimeout(controller.onEpisodeCounterChange.bind(controller), 40);
});
episodeCounter.decrementor.addEventListener('click', () => {
    setTimeout(controller.onEpisodeCounterChange.bind(controller), 40);
});
form.indexAddEventListener('change', controller.onFormChange.bind(controller));
form.nameAddEventListener('change', controller.onFormChange.bind(controller))