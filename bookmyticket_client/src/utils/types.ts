type Movie = {
    id: string;
    name: string;
    description: string;
    runtime: number;
    rating: number;
    poster: string;
    cover: string;
};

type Occurence = {
    address: string;
    hallName: string;
    id: number;
    movie: number;
    occurence: string;
};

type Movies = Array<Movie>;

type HappenningDate = {
    id: number;
    happening_date: string,
    movie_id: number;
}

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

type loginErrorMessages = {
    username: boolean;
    password: boolean;
};


export { type Movie, type Movies, type Locations, type Location, type Time, type SeatsType, type loginErrorMessages, type HappenningDate, type Occurence };