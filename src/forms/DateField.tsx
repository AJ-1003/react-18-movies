import { useFormikContext } from "formik";
import { useState } from "react";

export default function DateField(props: dateFieldProps) {

    const { values, validateForm, touched, errors } = useFormikContext<any>();
    // const dobDate = new Date(values[props.field]).toISOString().split('/').reverse().join('-');
    const dobDate = new Date(values[props.field]);

    return (
        <div className="mb-3">
            <label
                className="form-label"
                htmlFor={props.field}>
                {props.displayName}
            </label>
            <input
                type="date"
                className="form-control"
                id={props.field}
                name={props.field}
                defaultValue={values[props.field]}
                // defaultValue={dobDate.split('/').reverse().join('/')}
                // value={dobDate.split('/').reverse().join('/')}
                // value={dobDate}
                // defaultValue={dobDate.setFullYear(dobDate.getFullYear(), dobDate.getMonth(), dobDate.getDate())}
                // defaultValue={dobDate.toDateString()}
                onChange={e => {
                    // alert(typeof(values[props.field]) + " : " + values[props.field])
                    const date = new Date(e.currentTarget.value);
                    values[props.field] = date;
                    // alert(typeof(values[props.field]) + " : " + values[props.field])
                    validateForm();
                }}
                // required pattern="\d{4}-\d{2}-\d{2}"
            />
            {touched[props.field] && errors[props.field] ?
                <div
                    className="text-danger">
                    {errors[props.field]?.toString()}
                </div> :
                null}
        </div>
    )
}

interface dateFieldProps {
    field: string;
    displayName: string;
}