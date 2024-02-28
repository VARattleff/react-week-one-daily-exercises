import { BaseProps } from "../types.ts";
import Profile from "../components/Profile";
import {Fragment, useState} from "react";

export default function PropsDemo({ title }: BaseProps) {
    const [showHorizontal, setShowHorizontal] = useState(false);
    return (
        <Fragment>
            <h2>{title}</h2>
            Direction: <input type="checkbox" checked={showHorizontal} onChange={()=>setShowHorizontal(!showHorizontal)}/>
            <Profile name="Max Power" email="mp@email.com" isActive={true} singleLine={showHorizontal} />
        </Fragment>
    );
}