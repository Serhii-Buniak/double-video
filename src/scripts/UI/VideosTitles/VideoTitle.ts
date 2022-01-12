abstract class VideoTitle {
    protected abstract htmlElement: HTMLElement;

    set value(value: string) {
        this.htmlElement.innerText = value;
    }

    get value(): string {
        return this.htmlElement.innerText;
    }
}
export default VideoTitle;





