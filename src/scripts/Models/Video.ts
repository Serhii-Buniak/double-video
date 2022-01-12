import VideoElement from "../UI/VideoElements/VideoElement.js";
import Episode from "./Episode.js";

abstract class Video {
    private _episode?: Episode;
    readonly element: VideoElement;
    readonly folder: string;
    static _isFullScreen: boolean = false;

    constructor(element: VideoElement, folderPath: string, episode?: Episode) {
        this.element = element
        this.folder = folderPath;
        this._episode = episode;
    }

    public set episode(value: Episode) {
        this._episode = value;
    }
    public get episode(): Episode {
        return this._episode as Episode;
    }

    public get episodePath(): string {
        if (!this.folder) {
            throw new Error("Folder is undefined")
        }
        return this.folder + '/' + this.episode.numeratedName;
    }

}
export default Video;



