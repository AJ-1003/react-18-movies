import { Field } from "formik";

export default function CheckbocField(props: checkboxField) {
    return (
        <div className="mb-3 form-check">
            <Field className="form-check-input" id={props.field} name={props.field} type="checkbox" />
            <label className="form-label" htmlFor={props.field}>{props.displayName}</label>
        </div>
    )
}

interface checkboxField {
    displayName: string;
    field: string;
}