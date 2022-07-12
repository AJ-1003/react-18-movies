import { ErrorMessage, Field } from "formik";

export default function TextField(props: textFieldProps) {
    return (
        <div className="mb-3">
            <label
                className="form-label"
                htmlFor={props.field}>
                {props.displayName}
            </label>
            <Field name={props.field} className="form-control"></Field>
            <ErrorMessage name={props.field}>{msg =>
                <div className="text-danger">{msg}</div>}
            </ErrorMessage>
        </div>
    )
}

interface textFieldProps {
    field: string;
    displayName: string;
}