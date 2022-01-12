import InputElement from "../InputElement.js";
import EpisodeForm from "./EpisodeForm.js";

class PictureEpisodeForm extends EpisodeForm {
    protected nameInput = new InputElement<string>('#input-picture-name');
    protected indexInput = new InputElement<number>('#input-picture-name'); 
}
export default PictureEpisodeForm;