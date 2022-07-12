import { urlGenres } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { genresDTO } from "./genres.model";

export default function IndexGenres() {
    return (
        <>
            <IndexEntity<genresDTO>
                url={urlGenres}
                createUrl="/genres/create"
                title="Genres"
                entityName="Genre">
                {(genres, buttons) =>
                    <>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {genres?.map(genre =>
                                <tr key={genre.id}>
                                    <td>
                                        {genre.name}
                                    </td>
                                    <td>
                                        {buttons(`/genres/edit/${genre.id}`, genre.id)}
                                    </td>
                                </tr>)}
                        </tbody>
                    </>}
            </IndexEntity>
        </>
    )
}