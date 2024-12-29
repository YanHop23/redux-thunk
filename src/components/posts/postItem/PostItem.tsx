import React, { useState } from "react";
import { Post } from "../../../redux/reducers";
import styles from "./style.module.css";
import { CustomAvatar } from "../../customComponents/Avatar";

interface PostItemProps {
    post: Post;
}

export const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const [showPost, setShowPost] = useState(false);
    const toggleShowPost = () => {
        setShowPost((prevState) => !prevState);
    };
    const truncateBody = (text: string): string => {
        return text.length > 100 ? text.slice(0, 80) + "..." : text;
    };
    return (
        <div className={styles.card} onClick={toggleShowPost}>
            <div className={styles.header}>
                <CustomAvatar name={post.userName} size={38}/>
                <h2 className={styles.userName}>{post.userName}</h2>
            </div>
            <div className={styles.post}>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.body}>
                    {showPost ? post.body : truncateBody(post.body)}
                </p>
            </div>
        </div>
    );
};
