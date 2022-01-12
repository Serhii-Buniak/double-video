import { onEpisodeCounterChange as onEpisodeCounterChange, restorePictureEpisode, restoreSoundEpisode } from "../Controllers/EpisodeController.js";
import EpisodeRepository from "../Data/EpisodeRepository.js";
import EpisodeForm from "../UI/EpisodeForms/EpisodeForm.js";
import Episode from "../Models/Episode.js";
import EpisodeCounter from "../UI/EpisodeCounter.js";
import PictureEpisodeForm from "../UI/EpisodeForms/PictureEpisodeForm.js";
import SoundEpisodeForm from "../UI/EpisodeForms/SoundEpisodeForm.js";
import PictureEpisodeRepository from "../Data/PictureEpisodeRepository.js";
import SoundEpisodeRepository from "../Data/SoundEpisodeRepository.js";

const pictureForm: EpisodeForm = new PictureEpisodeForm();
const soundForm: EpisodeForm = new SoundEpisodeForm();

const pictureRepository: EpisodeRepository = new PictureEpisodeRepository();
const soundRepository: EpisodeRepository = new SoundEpisodeRepository();

const episodeCounter = new EpisodeCounter();

episodeCounter.addEventListener('change', onEpisodeCounterChange);

episodeCounter.icrementor.addEventListener('click', () => {
    episodeCounter.value++;
    onEpisodeCounterChange();
})

episodeCounter.decrementor.addEventListener('click', () => {
    episodeCounter.value--;
    onEpisodeCounterChange();
})

setFormEvents(pictureForm, pictureRepository, restorePictureEpisode);
setFormEvents(soundForm, soundRepository, restoreSoundEpisode);

function setFormEvents(form: EpisodeForm, repository: EpisodeRepository, restoreEpisode: Function) {
    const onChange = () => {
        repository.episode = new Episode(form.name, form.index, episodeCounter.value)
        restoreEpisode();
    }
    form.indexAddEventListener('change', onChange);
    form.nameAddEventListener('change', onChange)
}




