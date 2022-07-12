import { urlActors } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { actorDTO } from "./actors.model";

export default function IndexActors() {
    return (
        <>
            <IndexEntity<actorDTO>
                url={urlActors}
                createUrl="/actors/create"
                title="Actors"
                entityName="Actor">
                {(actors, buttons) =>
                    <>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date of Birth</th>
                                <th>Biography</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {actors?.map(actor =>
                                <tr key={actor.id}>
                                    
                                    <td>
                                        {actor.name}
                                    </td>
                                    <td>
                                        {actor.dateOfBirth.toLocaleString()}
                                    </td>
                                    <td>
                                        {actor.biography}
                                    </td>
                                    <td>
                                        {buttons(`/actors/edit/${actor.id}`, actor.id)}
                                    </td>
                                </tr>)}
                        </tbody>
                    </>}
            </IndexEntity>
        </>
    )
}