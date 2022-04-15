import InputElement from "../InputElement.js";
import EpisodeForm from "./EpisodeForm.js";
class SoundEpisodeForm extends EpisodeForm {
    constructor() {
        super(...arguments);
        this.nameInput = new InputElement('#input-sound-name');
        this.indexInput = new InputElement('#input-sound-index');
    }
}
export default SoundEpisodeForm;
