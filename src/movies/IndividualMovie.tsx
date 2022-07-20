import { movieDTO } from "./movies.model";
import css from "./IndividualMovie.module.css";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import customConfirm from "../utils/CustomConfirm";
import axios from "axios";
import { urlMovies } from "../endpoints";
import { useContext } from "react";
import alertContext from "../utils/alertContext";
import Authorized from "../auth/Authorized";

export default function IndividualMovie(props: movieDTO) {

    const buildLink = () => `/movie/${props.id}`;
    const customAlert = useContext(alertContext);

    function deleteMovie() {
        axios.delete(`${urlMovies}/${props.id}`)
            .then(() => {
                customAlert();
            })
    };

    return (
        <div className={css.div}>
            <Link to={buildLink()}>
                <img src={props.poster} alt="poster" />
            </Link>
            <p>
                <Link to={buildLink()}>{props.title}</Link>
            </p>
            <Authorized
                authorized={
                    <div>
                        <Link
                            style={{ marginRight: '1rem' }}
                            className="btn btn-info"
                            to={`/movies/edit/${props.id}`}>Edit</Link>
                        <Button
                            onClick={() => customConfirm(() => deleteMovie())}
                            className="btn btn-danger">Delete</Button>
                    </div>
                }
            />
        </div>
    )
}