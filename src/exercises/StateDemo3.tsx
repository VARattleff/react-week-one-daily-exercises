import { BaseProps } from "../types";
import { users as usersFromDB, User,getNextId } from "../data/data";
import {Fragment, useState} from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
type Props = BaseProps;

export default function StateDemo3({ title }: Props) {
    const [users, setUsers] = useState<User[]>(usersFromDB || []);
    const nextId = getNextId()

    const onSubmitUser = (newUser: User) => {
        newUser.id = nextId;
        setUsers([...users, newUser]);
        console.log(users);
    };

    return (
        <Fragment>
            <h2>{title}</h2>
            <UserTable users={users} />
            <UserForm title="Add User" onSubmitUser={onSubmitUser} />
        </Fragment>
    );
}
