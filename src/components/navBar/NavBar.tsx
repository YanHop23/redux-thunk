import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <NavLink
                to="/users"
                className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                }
            >
                Users
            </NavLink>
            <NavLink
                to="/posts"
                className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                }
            >
                Posts
            </NavLink>
        </div>
    );
};
