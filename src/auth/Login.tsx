import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlAccounts } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import { authenticationResponse, userCredentials } from "./auth.model";
import authenticationContext from "./authenticationContext";
import AuthForm from "./AuthForm";
import { getClaims, saveToken } from "./handleJWT";

export default function Login() {

    const [errors, setErrors] = useState<string[]>([]);
    const { update } = useContext(authenticationContext);
    const navigate = useNavigate();

    async function login(credentials: userCredentials) {
        try {
            setErrors([]);
            const response = await axios.post<authenticationResponse>(`${urlAccounts}/login`, credentials);
            saveToken(response.data);
            update(getClaims());
            navigate('/');
            console.log(response.data);
        } catch (error) {
            setErrors(error.response.data);
        }
    }

    return (
        <>
            <h3>Login</h3>
            <DisplayErrors errors={errors} />
            <AuthForm
                model={{
                    email: '',
                    password: ''
                }}
                onSubmit={async values => await login(values)} />
        </>
    )
}