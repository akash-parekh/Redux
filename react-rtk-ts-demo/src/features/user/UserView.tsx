import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchUsers } from "./userSlice";

export const UserView = () => {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    return (
        <div>
            <h2>List of Users</h2>
            {user.loading && <h3>loading....</h3>}
            {!user.loading && user.error ? <h3>Error: {user.error}</h3> : null}
            {!user.loading && user.users.length ? (
                <ul>
                    {user.users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};
