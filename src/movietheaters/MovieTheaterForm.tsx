import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import MapField from "../forms/MapField";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import coordinateDTO from "../utils/coordinates.model";
import { movieTheaterCreationDTO } from "./movieTheater.model";

export default function MovieTheaterForm(props: movieTheaterProps) {

    function transformCoordinates(): coordinateDTO[] | undefined {
        if (props.model.latitude && props.model.longitude) {
            const response: coordinateDTO = {
                lat: props.model.latitude,
                lng: props.model.longitude
            }
            return [response];
        }
        return undefined;
    }

    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUppercase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName="Name" field="name" />
                    <div className="mb-3">
                        <MapField latField="latitude" lngField="longitude" coordinates={transformCoordinates()} />
                    </div>
                    <Button disabled={formikProps.isSubmitting} type="submit">
                        Save Changes
                    </Button>
                    <Link className="btn btn-secondary" to="/movietheaters">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieTheaterProps {
    model: movieTheaterCreationDTO;
    onSubmit(values: movieTheaterCreationDTO, actions: FormikHelpers<movieTheaterCreationDTO>): void;
}