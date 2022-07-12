import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlMovies } from "../endpoints";
import { genresDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import { convertMovieToFormData } from "../utils/formDataUtils";
import DisplayErrors from "../utils/DisplayErrors";
import Loading from "../utils/Loading";
import MovieForm from "./MovieForm";
import { movieCreationDTO, moviesPostGetDTO } from "./movies.model";

export default function CreateMovie() {

    const [nonSelectedGenres, setNonSelectedGenres] = useState<genresDTO[]>([]);
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState<movieTheaterDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${urlMovies}/PostGet`)
            .then((response: AxiosResponse<moviesPostGetDTO>) => {
                setNonSelectedGenres(response.data.genres);
                setNonSelectedMovieTheaters(response.data.movieTheaters);
                setLoading(false);
            });
    }, []);

    async function create(movie: movieCreationDTO) {
        try {
            const formData = convertMovieToFormData(movie);
            await axios({
                method: "post",
                url: urlMovies,
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            navigate(`/movies`);
        }
        catch (error) {
            setErrors(error.response.data);
        }
    }

    return (
        <>
            <h3>Create Movie</h3>
            <DisplayErrors errors={errors} />
            {loading ? <Loading /> :
                <MovieForm model={{
                    title: "",
                    inTheaters: false,
                    trailer: ""
                }}
                    onSubmit={async values =>
                        await create(values)
                        /*console.log(values)*/
                    }
                    selectedGenres={[]}
                    nonSelectedGenres={nonSelectedGenres}

                    selectedMovieTheaters={[]}
                    nonSelectedMovieTheaters={nonSelectedMovieTheaters}

                    selectedActors={[]} />
            }
        </>
    )
}