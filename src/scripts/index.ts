interface String {
    insert(index: number, value: string): string;
}

String.prototype.insert = function name(index: number, value: string) {
    return this.substring(0, index) + value + this.substring(index);
};

type episodeForm = { name: HTMLInputElement, index: HTMLInputElement };
type episodeDataKeys = { name: string, index: string, number: string }