import React from "react"
import { claim } from "./auth.model"

const authenticationContext = React.createContext<{
    claims: claim[];
    update(claims: claim[]): void;
}>({ claims: [], update: () => { } });

export default authenticationContext;