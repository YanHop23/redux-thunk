import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return(
        <div>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </div>
    )
};
