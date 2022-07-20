import { actorMovieDTO } from "../actors/actors.model";
import { genresDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";

// DTO - Data Transfer Object
export interface movieDTO {
    id: number;
    title: string;
    poster: string;
    inTheaters: boolean;
    trailer: string;
    summary?: string;
    releaseDate: Date;
    genres: genresDTO[];
    movieTheaters: movieTheaterDTO[];
    actors: actorMovieDTO[];
    userRating: number;
    averageRating: number;
}

export interface movieCreationDTO {
    title: string;
    inTheaters: boolean;
    trailer: string;
    summary?: string;
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;
    genresIds?: number[];
    movieTheatersIds?: number[];
    actors?: actorMovieDTO[];
}

export interface landingPageDTO {
    inTheaters?: movieDTO[];
    upcomingReleases?: movieDTO[];
}

export interface moviesPostGetDTO {
    genres: genresDTO[];
    movieTheaters: movieTheaterDTO[];
}

export interface moviePutGetDTO {
    movie: movieDTO;
    selectedGenres: genresDTO[];
    nonSelectedGenres: genresDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTOp[];
    actors: actorMovieDTO[];
}