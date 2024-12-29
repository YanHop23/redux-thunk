export const SET_USERS = "SET_USERS";
export const SET_POSTS = "SET_POSTS";
export const FETCHING = "FETCHING";
export const SET_CURENT_POSTS = "SET_CURENT_POSTS";
export const CHANGE_PAGE = "CHANGE_PAGE";

export const setUsers = (users: Array<object>) => ({
    type: SET_USERS,
    payload: { users },
});
export const fetching = (fetchingState: boolean) => ({
    type: FETCHING,
    payload: { fetchingState },
});
export const setPosts = (posts: Array<object>) => ({
    type: SET_POSTS,
    payload: { posts },
});
export const setCurentPosts = () => ({
    type: SET_CURENT_POSTS,
});
export const changePage = (page: number) => ({
    type: CHANGE_PAGE,
    payload: { page },
});
