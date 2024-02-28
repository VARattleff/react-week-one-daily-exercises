import {Fragment, useEffect, useState} from "react";
import { BaseProps } from "../types";

const SERVER_URL = "http://localhost:8000/users";
const DELAY = 500;
const MAX_USER_ID = 15;

interface User {
    id: number;
    name: string;
}

async function fetchUser(userId: number, options?: object): Promise<User> {
    const res = await fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options);
    return await res.json();
}

export default function FetchDemo({ title }: BaseProps) {
    const [userId] = useState(1);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchNextUser = async () => {
        // @ts-ignore
        const nextUserId = user?.id % MAX_USER_ID + 1;
        setLoading(true);
        const nextUser = await fetchUser(nextUserId);
        setLoading(false);
        setUser(nextUser);
    };

    useEffect(() => {
        fetchUser(userId).then((response) => {
            setUser(response);
            setLoading(false);
        });
    }, [userId]);

    return (
        <Fragment>
            <h2>{title}</h2>
            {loading && <p>Loading...</p>}
            {user && JSON.stringify(user)}
            <br />
            <button onClick={fetchNextUser}>Next User</button>
        </Fragment>
    );
}
