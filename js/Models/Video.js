class Video {
    constructor(element, folderPath, episode) {
        this.element = element;
        this.folder = folderPath;
        this._episode = episode;
    }
    set episode(value) {
        this._episode = value;
    }
    get episode() {
        return this._episode;
    }
    get episodePath() {
        if (!this.folder) {
            throw new Error("Folder is undefined");
        }
        return this.folder + '/' + this.episode.numeratedName;
    }
}
export default Video;
