import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../redux/actions/users";
import Card from "./CardComponent";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <>
            {users.loading && <p>Loading...</p>}
            {users.length > 0 && users.map((user) => (
                <Card user={user} key={user.id} />
            ))}
            {users.length === 0 && !loading && <p>No users available!</p>}
            {error && !loading && <p>{error}</p>}
        </>
    )
}

export default Users;