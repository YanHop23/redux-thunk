import React from "react";
import { User } from "../../../redux/reducers";
import styles from "./style.module.css";
import { CustomAvatar } from "../../customComponents/Avatar";
interface UserItemProps {
    user: User;
}

export const UserItem: React.FC<UserItemProps> = ({ user }) => {
    return (
        <div className={styles.card}>
            <CustomAvatar name={user.name} size={50}/>
            <div className={styles.userInfo}>
                <div>
                    <h2 className={styles.name}>{user.name}</h2>
                    <p className={styles.email}>{user.email}</p>
                </div>
                <p className={styles.username}>@{user.username}</p>
            </div>
        </div>
    );
};
