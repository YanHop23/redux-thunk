import React from "react";
import { User } from "../../../redux/reducers";
import { Avatar } from "@mui/material";
import styles from "./style.module.css";
interface UserItemProps {
    user: User;
}

export const UserItem: React.FC<UserItemProps> = ({ user }) => {
    let randomColor = () => {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            //generete random light color (2-8)
            color += 2 + Math.floor(Math.random() * 6);
        }
        return color;
    };
    return (
        <div className={styles.card}>
            <Avatar style={{ backgroundColor: randomColor() }}>
                {user.name.charAt(0).toUpperCase()}
            </Avatar>
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
