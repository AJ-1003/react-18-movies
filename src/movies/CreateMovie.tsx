import { genresDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function CreateMovie() {

    const nonSelectedGenres: genresDTO[] = [
        {
            id: 1,
            name: "Comedy"
        },
        {
            id: 2,
            name: "Action"
        }
    ]

    const nonSelectedMovieTheaters: movieTheaterDTO[] = [
        {
            id: 1,
            name: "NuMetro"
        },
        {
            id: 2,
            name: "Sterkinikor"
        }
    ]

    return (
        <>
            <h3>Create Movie</h3>
            <MovieForm model={{
                title: "",
                inTheaters: false,
                trailer: ""
            }}
                onSubmit={values => console.log(values)}
                selectedGenres={[]}
                nonSelectedGenres={nonSelectedGenres}
                selectedMovieTheaters={[]}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedActors={[]} />
        </>
    )
}