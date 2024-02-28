import { BaseProps } from "../types";
import {getNextId, User, users as usersDB} from "../data/data";
import {Fragment, useState} from "react";
import UserTableWithButtons from "../components/UserTableWithButtons";
import "../styles/liftingState.css";
import UserFormControlled, {AddEditDeleteFunction} from "../components/UserformControlled";

export default function LiftingState({ title }: BaseProps) {
    const [users, setUsers] = useState(usersDB);
    const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);

    const addEditDeleteUser: AddEditDeleteFunction = (user, isDelete) => {
        if (isDelete) {
            setUsers(prevUsers => prevUsers.filter(u => u.id !== user.id));
        } else if (user.id) {
            setUsers(prevUsers =>
                prevUsers.map(u => (u.id === user.id ? { ...u, ...user } : u))
            );
        } else {
            setUsers(prevUsers => [...prevUsers, { ...user, id: getNextId() }]);
        }
    };

    const editUser = (id: number) => {
        const foundUser = users.find(user => user.id === id);
        if (foundUser) {
            setUserToEdit(foundUser);
        }
    };

    return (
        <Fragment>
            <h2>{title}</h2>
            <div className="outer">
                <h2 style={{ margin: 0 }}>Root Component</h2>
                <p style={{ margin: 0 }}>
                    This is where ALL the users live (Single Source of truth).{" "}
                    <em>User Count:</em> <b>{users.length}</b>
                </p>
                <p>
                    <em>User To Edit:</em> <b>{JSON.stringify(userToEdit)}</b>
                </p>

                <div className="outer-user-table">
                    <div className="user-table">
                        <UserTableWithButtons users={users} editUser={editUser} />
                    </div>
                    <div className="user-form">
                        <UserFormControlled
                            title="Add User"
                            onSubmitUser={addEditDeleteUser}
                            defaultUser={userToEdit}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
