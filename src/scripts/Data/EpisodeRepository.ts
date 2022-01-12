import Episode from "../Models/Episode.js";
import DataContext from "./DataContext.js";

abstract class EpisodeRepository {
    protected readonly _dataContext = new DataContext;

    abstract set name(value: string);
    abstract get name(): string;

    abstract set index(value: number);
    abstract get index(): number;

    abstract set number(value: number);
    abstract get number(): number;

    abstract set time(value: number);
    abstract get time(): number;

    set episode(value: Episode) {
        this.name = value.name;
        this.index = value.index;
        this.number = value.number;
    }

    get episode(): Episode {
        return new Episode(this.name, this.index, this.number);
    }
}

export default EpisodeRepository;