import InputElement from "../InputElement.js";
import EpisodeForm from "./EpisodeForm.js";

class SoundEpisodeForm extends EpisodeForm {
    protected nameInput = new InputElement<string>('#input-sound-name');
    protected indexInput = new InputElement<number>('#input-sound-index'); 
}

export default SoundEpisodeForm;