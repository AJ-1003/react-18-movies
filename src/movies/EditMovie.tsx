import { actorMovieDTO } from "../actors/actors.model";
import { genresDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {

    const selectedGenres: genresDTO[] = [
        {
            id: 1,
            name: "Comedy"
        }
    ]
    const nonSelectedGenres: genresDTO[] = [
        {
            id: 2,
            name: "Action"
        }
    ]

    const selectedMovieTheaters: movieTheaterDTO[] = [
        {
            id: 1,
            name: "NuMetro"
        }
    ]

    const nonSelectedMovieTheaters: movieTheaterDTO[] = [
        {
            id: 2,
            name: "Sterkinikor"
        }
    ]

    const selectedActors: actorMovieDTO[] = [
        {
            id: 3,
            name: "Saartjie",
            characterName: "Penny",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Kaley_Cuoco_by_Gage_Skidmore.jpg/220px-Kaley_Cuoco_by_Gage_Skidmore.jpg"
        }
    ]

    return (
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{
                title: "Spiderman",
                inTheaters: true,
                trailer: "url",
                releasedDate: new Date('2022-06-27T00:00:00')
            }}
                onSubmit={values => console.log(values)}
                selectedGenres={selectedGenres}
                nonSelectedGenres={nonSelectedGenres}
                selectedMovieTheaters={selectedMovieTheaters}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedActors={selectedActors} />
        </>
    )
}