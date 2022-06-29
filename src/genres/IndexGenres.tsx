import { Link } from "react-router-dom";

export default function IndexGenres() {
    return (
        <>
            <h3>Genres</h3>
            <p>This will display all genres listed in the DB</p>
            <Link className="btn btn-primary" to="/genres/create">
                Create Genre
            </Link>
        </>
    )
}