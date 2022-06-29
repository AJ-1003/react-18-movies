import { Link } from "react-router-dom";

export default function IndexMovieTheaters() {
    return (
        <>
            <h3>Movie Theaters</h3>
            <p>This will display all movie theaters listed in the DB</p>
            <Link className="btn btn-primary" to="/movietheaters/create">
                Create theater
            </Link>
        </>
    )
}