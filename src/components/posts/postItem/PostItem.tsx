import React from "react";
import { Post } from "../../../redux/reducers";
import styles from "./style.module.css";

interface PostItemProps {
    post: Post;
}

export const PostItem: React.FC<PostItemProps> = ({ post }) => {
   
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{post.title}</h3>
                <span className={styles.userId}>User ID: {post.userId}</span>
            </div>
            <p className={styles.body}>{post.body}</p>
        </div>
    );
};
