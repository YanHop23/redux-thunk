import React, { useEffect } from "react";
import { PreLoader } from "../../loaders/preLoader";
import styles from "./style.module.css";
import { Pagination } from "@mui/material";
import { Post } from "../../../redux/reducers";
import { PostItem } from "../postItem/PostItem";

interface PostListProps {
    posts: Post[];
    isFetching: boolean;
    mountPages: number;
    postPage: number;
    getPostsThunk: () => void;
    setCurentPostsThunk: (page: number) => void;
}

export const PostList: React.FC<PostListProps> = ({
    posts,
    isFetching,
    mountPages,
    postPage,
    getPostsThunk,
    setCurentPostsThunk,
}) => {
    useEffect(() => {
        if (posts.length === 0) {
            getPostsThunk();
        }
    }, [posts, getPostsThunk]);
    if (isFetching) {
        return <PreLoader />;
    }
    console.log(posts);

    return (
        <div className={styles.list}>
            {posts.map((post) => (
                <PostItem post={post} key={post.id}/>
            ))}
            <div className={styles.pagination}>
                <Pagination
                    count={mountPages}
                    page={postPage}
                    onChange={(_, newPage) => setCurentPostsThunk(newPage)}
                    variant="outlined"
                    shape="rounded"
                />
            </div>
        </div>
    );
};
