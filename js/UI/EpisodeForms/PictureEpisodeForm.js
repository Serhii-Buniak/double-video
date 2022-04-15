import InputElement from "../InputElement.js";
import EpisodeForm from "./EpisodeForm.js";
class PictureEpisodeForm extends EpisodeForm {
    constructor() {
        super(...arguments);
        this.nameInput = new InputElement('#input-picture-name');
        this.indexInput = new InputElement('#input-picture-index');
    }
}
export default PictureEpisodeForm;
