class VideoTitle {
    set value(value) {
        this.htmlElement.innerText = value;
    }
    get value() {
        return this.htmlElement.innerText;
    }
}
export default VideoTitle;
