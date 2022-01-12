interface String {
    insert(index: number, value: string): string;
}

String.prototype.insert = function (index: number, value: string) {
    return this.substring(0, index) + value + this.substring(index);
};