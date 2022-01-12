import SoundEpisodeController from "../Controllers/SoundEpisodeController.js";
import EpisodeCounter from "../UI/EpisodeCounter.js";
import SoundEpisodeForm from "../UI/EpisodeForms/SoundEpisodeForm.js";

const controller = new SoundEpisodeController();
const form = new SoundEpisodeForm();
const episodeCounter = new EpisodeCounter();

document.addEventListener("DOMContentLoaded", controller.restore.bind(controller));

episodeCounter.addEventListener('change', controller.onEpisodeCounterChange.bind(controller))
episodeCounter.icrementor.addEventListener('click', () => controller.onEpisodeCounterChange.bind(controller)());
episodeCounter.decrementor.addEventListener('click', () => controller.onEpisodeCounterChange.bind(controller)());
form.indexAddEventListener('change', controller.onFormChange.bind(controller));
form.nameAddEventListener('change', controller.onFormChange.bind(controller))