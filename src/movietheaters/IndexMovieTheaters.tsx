import { urlMovieTheaters } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { movieTheaterDTO } from "./movieTheater.model";

export default function IndexMovieTheaters() {
    return (
        <IndexEntity<movieTheaterDTO>
            url={urlMovieTheaters}
            createUrl="/movietheaters/create"
            title="Movie Theaters"
            entityName="Movie Theater" >
            {(entities, buttons) =>
                <>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {entities?.map(entity =>
                            <tr key={entity.id}>
                                <td>
                                    {entity.name}
                                </td>
                                <td>
                                    {entity.latitude?.toString()}
                                </td>
                                <td>
                                    {entity.longitude?.toString()}
                                </td>
                                <td>
                                    {buttons(`/movietheaters/edit/${entity.id}`, entity.id)}
                                </td>
                            </tr>)}
                    </tbody>
                </>}
        </IndexEntity>
    )
}