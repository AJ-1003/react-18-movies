import { FormikHelpers } from "formik";
import ActorForm from "./ActorForm";
import { actorCreationDTO } from "./actors.model";

export default function CreateActor() {
    return (
        <>
            <h3>Create Actor</h3>
            <ActorForm model={{ name: '', dateOfBirth: undefined }} onSubmit={values => console.log(values)} />
        </>
    )
}