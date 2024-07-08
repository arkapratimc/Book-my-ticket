type Movie = {
    name: string;
    description: string;
    runtime: number;
    rating: number;
};

type Movies = Array<Movie>;

export { type Movie, type Movies };