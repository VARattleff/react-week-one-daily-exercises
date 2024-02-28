import {Fragment} from "react";

type ProbProfile = {
    name: string;
    email: string;
    isActive: boolean;
    singleLine: boolean;
}
export default function Profile({name, email, isActive, singleLine}: ProbProfile){
    if (singleLine) return (
       <p>{name}, {email}, {isActive ? "Aktiv" : "Ikke Aktiv"}, {singleLine}</p>
       );
    return (
        <Fragment>
            <p>{name}</p>
            <p>{email}</p>
            <p>{isActive ? "Aktiv" : "Ikke Aktiv"}</p>
        </Fragment>
    )
}