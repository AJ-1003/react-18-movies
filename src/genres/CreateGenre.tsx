import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Button from "../utils/Button";
import TextField from "../forms/TextField";
import GenreForm from "./GenreForm";

export default function CreateGenre() {

    // const navigate = useNavigate();

    return (
        <>
            <h3>Create Genre</h3>
            <GenreForm
                model={{ name: '' }}
                onSubmit={async value => {
                    await new Promise(r => setTimeout(r, 3000));
                    console.log(value);
                }} />
        </>
    )
}