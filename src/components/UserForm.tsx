import { BaseProps } from "../types";
import {FormEvent, useRef} from "react";
import {User} from "../data/data";

type UserFormProps = BaseProps & {
    onSubmitUser: (user: User) => void;
};

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const isActiveRef = useRef<HTMLInputElement>(null)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    const newUser: User = {
            id: Math.floor(Math.random() * 10 << 5),
            name: nameRef.current?.value || "",
            email: emailRef.current?.value || "",
            isActive: isActiveRef.current?.checked || false,
        };
        onSubmitUser(newUser);
    };

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={onSubmit}>
                First Name: <input name="name" ref={nameRef} />
                Email: <input name="email" ref={emailRef}/>
                Active: <input type="checkbox" name="isActive" ref={isActiveRef} />
                <button type="submit">Add User</button>
            </form>
        </>
    );
}
