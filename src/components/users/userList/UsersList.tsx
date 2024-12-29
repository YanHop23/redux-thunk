import React, { useEffect } from "react";
import { UserItem } from "../userItem/UsersItem";
import { User } from "../../../redux/reducers";
import { PreLoader } from "../../customComponents/preLoader";
import styles from "./style.module.css";

interface UsersListProps {
    users: User[];
    isFetching: boolean;
    getUsersThunk: () => void;
}

export const UsersList: React.FC<UsersListProps> = ({
    users,
    getUsersThunk,
    isFetching,
}) => {
    useEffect(() => {
        if (users.length === 0) {
            getUsersThunk();
        }
    }, [users, getUsersThunk]);
    if (isFetching) {
        return <PreLoader />;
    }
    return (
        <div className={styles.list}>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    );
};
