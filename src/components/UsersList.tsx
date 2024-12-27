import React, { useEffect } from "react";
import { UserItem } from "./UsersItem";
import { User } from "../redux/reducers";


interface UsersListProps {
    users: User[];
    getUsersThunk: () => void;
}

export const UsersList: React.FC<UsersListProps> = ({
    users,
    getUsersThunk,
}) => {
    useEffect(() => {
        if (users.length === 0) {
            getUsersThunk();
        }
    }, [users, getUsersThunk]);

    return (
        <div>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
};
