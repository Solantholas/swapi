interface IFilm {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    release_date: Date;
    species: string[];
    starships: string[];
    vehicles: string[];
    characters: string[];
    planets: string[];
    url: string;
    created: string;
    edited: string;
}

export default IFilm;