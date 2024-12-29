import { postsApi, usersApi } from "../api/api";
import {
    CHANGE_PAGE,
    changePage,
    fetching,
    FETCHING,
    SET_CURENT_POSTS,
    SET_POSTS,
    SET_USERS,
    setCurentPosts,
    setPosts,
    setUsers,
    shuffle,
    UPDATE_USERS_TO_POST,
    updateUserToPost,
} from "./actions";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        suite: string;
    };
    company: {
        name: string;
    };
}
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    userName: string;
}
export interface Posts {
    postPage: number;
    allposts: Post[];
    curentPosts: Post[];
}
export interface RootState {
    isFetching: boolean;
    users: User[];
    posts: Posts;
}

interface Action {
    type: string;
    payload?: any;
}

const initialState: RootState = {
    isFetching: false,
    users: [],
    posts: {
        postPage: 4,
        allposts: [],
        curentPosts: [],
    },
};
let startIndex;
export const reducers = (state = initialState, action: Action): RootState => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload?.users,
            };
        case SET_POSTS:
            startIndex =
                (action.payload.posts.length / 10) * (state.posts.postPage - 1);
            //shufle to testing app
            let shuffleArray = shuffle(action.payload.posts);
            return {
                ...state,
                posts: {
                    ...state.posts,
                    allposts: shuffleArray,
                    curentPosts: action.payload.posts.slice(
                        startIndex,
                        startIndex + 10
                    ),
                },
            };
        case SET_CURENT_POSTS:
            startIndex =
                (state.posts.allposts.length / 10) * (state.posts.postPage - 1);
            return {
                ...state,
                posts: {
                    ...state.posts,
                    curentPosts: state.posts.allposts.slice(
                        startIndex,
                        startIndex + 10
                    ),
                },
            };
        case UPDATE_USERS_TO_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    curentPosts: state.posts.curentPosts.map((post) => {
                        let currentUserName = state.users.find(
                            (user) => user.id === post.userId
                        );
                        if (currentUserName) {
                            return {
                                ...post,
                                userName: currentUserName.name,
                            };
                        }
                        return post;
                    }),
                },
            };
        case CHANGE_PAGE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    postPage: action.payload.page,
                },
            };
        case FETCHING:
            return {
                ...state,
                isFetching: action.payload?.fetchingState ? true : false,
            };
        default:
            return state;
    }
};
export const getUsersThunk = () => (dispatch: Function) => {
    dispatch(fetching(true));
    usersApi.getUsers().then((data) => {
        dispatch(setUsers(data));
        dispatch(fetching(false));
    });
};

export const getPostsThunk = () => (dispatch: Function) => {
    dispatch(fetching(true));
    dispatch(getUsersThunk());
    postsApi.getPosts().then((data) => {
        dispatch(setPosts(data));
        dispatch(fetching(false));
        dispatch(updateUserToPost());
    });
};
export const setCurentPostsThunk = (page: number) => (dispatch: Function) => {
    dispatch(changePage(page));
    dispatch(setCurentPosts());
    dispatch(updateUserToPost());
};
