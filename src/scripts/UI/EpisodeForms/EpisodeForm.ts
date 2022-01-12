abstract class EpisodeForm {
    protected abstract nameInput: HTMLInputElement;
    protected abstract indexInput: HTMLInputElement;

    public set name(value: string) {
        this.nameInput.value = String(value);
    }
    public get name(): string {   
        return this.nameInput.value;
    }
    public get nameAddEventListener() {
        return this.nameInput.addEventListener;
    }

    public set index(value: number) {
        this.indexInput.value = String(value);
    }
    public get index(): number {
        return Number(this.indexInput.value);
    }
    public get indexAddEventListener() {
        return this.indexInput.addEventListener;
    }
}

export default EpisodeForm;

