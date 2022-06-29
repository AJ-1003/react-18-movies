import { ReactElement, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";

export default function TypeAheadActors(props: typeAheadActorsProps) {

    const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined);

    const actors: actorMovieDTO[] = [
        {
            id: 1,
            name: "Koos",
            characterName: "",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/220px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg"
        },
        {
            id: 2,
            name: "Piet",
            characterName: "",
            picture: ""
        },
        {
            id: 3,
            name: "Saartjie",
            characterName: "",
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Kaley_Cuoco_by_Gage_Skidmore.jpg/220px-Kaley_Cuoco_by_Gage_Skidmore.jpg"
        }
    ]

    const selected: actorMovieDTO[] = [];

    function handleDragStart(actor: actorMovieDTO) {
        setDraggedElement(actor);
    }

    function handleDragOver(actor: actorMovieDTO) {
        if (!draggedElement) {
            return;
        }

        if (actor.id !== draggedElement.id) {
            const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id);
            const actorIndex = props.actors.findIndex(x => x.id === actor.id);

            const actors = [...props.actors];
            actors[actorIndex] = draggedElement;
            actors[draggedElementIndex] = actor;
            props.onAdd(actors);
        }
    }

    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={actors => {
                    // check if the selected is already in the list
                    if (props.actors.findIndex(x => x.id === actors[0].id) === -1) {
                        props.onAdd([...props.actors, actors[0]]);
                    }
                    console.log(actors);
                }}
                options={actors}
                labelKey={actor => actor.name}
                filterBy={["name"]}
                placeholder="Write the name of the actor..."
                minLength={1}
                flip={true}
                selected={selected}
                renderMenuItemChildren={actor => (
                    <>
                        <img src={actor.picture} alt="actor"
                            style={{
                                height: "64px",
                                width: "64px",
                                marginRight: "10px"
                            }} />
                        <span>{actor.name}</span>
                    </>
                )}
            />

            <ul className="list-group">
                {props.actors.map(actor =>
                    <li
                        key={actor.id}
                        className="list-group-item list-group-item-action"
                        draggable={true}
                        onDragStart={() => handleDragStart(actor)}
                        onDragOver={() => handleDragOver(actor)}>
                        {props.listUI(actor)}
                        <span
                            className="badge badge-primary badge-pill pointer text-dark"
                            style={{
                                marginLeft: "0.5rem"
                            }}
                            onClick={() => props.onRemove(actor)}>X</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement;
}