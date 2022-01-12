import EpisodeForm from "./EpisodeForm";

class SoundEpisodeForm extends EpisodeForm {
    nameInput = document.querySelector('#input-sound-name') as HTMLInputElement;
    indexInput = document.querySelector('#input-sound-index') as HTMLInputElement;
}

export default SoundEpisodeForm;