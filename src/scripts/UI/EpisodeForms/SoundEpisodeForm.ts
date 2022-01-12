import EpisodeForm from "./EpisodeForm";

class SoundEpisodeForm extends EpisodeForm {
    protected nameInput = document.querySelector('#input-sound-name') as HTMLInputElement;
    protected indexInput = document.querySelector('#input-sound-index') as HTMLInputElement;
}

export default SoundEpisodeForm;