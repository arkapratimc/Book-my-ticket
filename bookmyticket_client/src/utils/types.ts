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

type Time = {
    startTime: string;
    endTime: string;
    id: number;
    seats: any;
};

type SeatsType = Time[];


export { type Movie, type Movies, type Locations, type Location, type Time, type SeatsType };