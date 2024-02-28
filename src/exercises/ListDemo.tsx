import { BaseProps } from "../types";
import { users } from "../data/data";
import UserTable from "../components/UserTable.tsx";
import {Fragment} from "react";
type Props = BaseProps;

export function ListDemo({ title }: Props) {
    return (
        <Fragment>
            <div className={"title"}>{title}</div>
            <div className={"info"}>Simple exercise to demonstrate Rendering Lists and the mandatory use of keys</div>
            {users && <UserTable users={users}/>}
        </Fragment>
    );
}