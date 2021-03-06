import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import Authorized from "../auth/Authorized";
import { urlMovies } from "../endpoints";
import alertContext from "../utils/alertContext";
import { landingPageDTO } from "./movies.model";
import MoviesList from "./MoviesList";

export default function LandingPage() {

    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        axios.get(urlMovies)
            .then((response: AxiosResponse<landingPageDTO>) => {
                setMovies(response.data);
            })
    }

    return (
        <alertContext.Provider value={() => {
            loadData();
        }}>
            <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters} />

            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomingReleases} />
        </alertContext.Provider>
    )
}