import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Button from "../utils/Button";
import TextField from "../forms/TextField";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.model";
import axios from "axios";
import { urlGenres } from "../endpoints";
import { useState } from "react";
import DisplayErrors from "../utils/DisplayErrors";

export default function CreateGenre() {

    const navigate = useNavigate();
    const [errors, setErrors] = useState<string[]>([]);

    async function create(genre: genreCreationDTO) {
        try {
            await axios.post(urlGenres, genre);
            navigate('/genres');
        }
        catch (error) {
            if (error && error.response) {
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Create Genre</h3>
            <DisplayErrors errors={errors} />
            <GenreForm
                model={{ name: '' }}
                onSubmit={async value => {
                    await create(value);
                }} />
        </>
    )
}