import React from "react";
import { User } from "../redux/reducers";


interface UserItemProps {
    user: User;
}

export const UserItem: React.FC<UserItemProps> = ({ user }) => {
    return (
        <div style={styles.card}>
            <h2 style={styles.name}>{user.name}</h2>
            <p style={styles.username}>@{user.username}</p>
            <p style={styles.info}>
                <strong>Email:</strong> {user.email}
            </p>
            <p style={styles.info}>
                <strong>Phone:</strong> {user.phone}
            </p>
            <p style={styles.info}>
                <strong>Address:</strong> {user.address.street},{" "}
                {user.address.city} ({user.address.suite})
            </p>
            <p style={styles.info}>
                <strong>Company:</strong> {user.company.name}
            </p>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px 0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
    },
    name: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "5px",
        color: "#333",
    },
    username: {
        fontSize: "1rem",
        color: "#777",
        marginBottom: "10px",
    },
    info: {
        fontSize: "0.9rem",
        marginBottom: "5px",
        color: "#555",
    },
};
