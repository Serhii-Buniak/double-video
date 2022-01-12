import EpisodeForm from "./EpisodeForm";

class PictureEpisodeForm extends EpisodeForm {
    protected nameInput = document.querySelector('#input-picture-name') as HTMLInputElement;
    protected indexInput = document.querySelector('#input-picture-index') as HTMLInputElement;
}

export default PictureEpisodeForm;