class EpisodeCounter {

    private valueInput = document.querySelector('#episode-input') as HTMLInputElement;
    readonly icrementor = new Incrementor();
    readonly decrementor = new Decrementor();

    public get value(): number {
        return Number(this.valueInput.value);
    }
    public set value(value: number) {
        this.valueInput.value = String(value);
    }

    get addEventListener() {
        return this.valueInput.addEventListener;
    }

    get removeEventListener() {
        return this.valueInput.removeEventListener;
    }
}

abstract class CounterOperator {

    protected abstract htmlElement: HTMLElement;

    get addEventListener() {
        return this.htmlElement.addEventListener;
    }

    get removeEventListener() {
        return this.htmlElement.removeEventListener;
    }
}

class Incrementor extends CounterOperator {
    htmlElement = document.querySelector('#number-increment') as HTMLElement;
}

class Decrementor extends CounterOperator {
    htmlElement = document.querySelector('#number-decrement') as HTMLElement;
}

export default EpisodeCounter