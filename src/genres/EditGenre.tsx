import { urlGenres } from "../endpoints";
import EditEntity from "../utils/EditEntity";
import GenreForm from "./GenreForm";
import { genreCreationDTO, genresDTO } from "./genres.model";

export default function EditGenre() {
    return (
        <>
            <EditEntity<genreCreationDTO, genresDTO>
                url={urlGenres}
                entityName="Genres"
                indexURL="/genres">
                {(genre, edit) =>
                    <GenreForm
                        model={genre}
                        onSubmit={async value => {
                            await edit(value);
                        }} />}
            </EditEntity>
        </>
    )
}