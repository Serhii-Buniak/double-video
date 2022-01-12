import EpisodeForm from "./EpisodeForm";

class PictureEpisodeForm extends EpisodeForm {
    nameInput = document.querySelector('#input-picture-name') as HTMLInputElement;
    indexInput = document.querySelector('#input-picture-index') as HTMLInputElement;
}

export default PictureEpisodeForm;