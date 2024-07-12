type Movie = {
    id: string;
    name: string;
    description: string;
    runtime: number;
    rating: number;
    poster: string;
    cover: string;
};

type Movies = Array<Movie>;



type Location = {
    id: number;
    hallName: string;
    address: string;
    movie: number;
    time: Array<{ id: number; startTime: string; endTime: string, seats: any }>;
};

type Locations = Array<Location>;

export { type Movie, type Movies, type Locations, type Location };