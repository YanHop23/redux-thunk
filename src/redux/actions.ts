export const SET_USERS = "SET_USERS";
export const SET_POSTS = "SET_POSTS";
export const FETCHING = "FETCHING";
export const SET_CURENT_POSTS = "SET_CURENT_POSTS";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const UPDATE_USERS_TO_POST = "UPDATE_USERS_TO_POST";

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
export const updateUserToPost = () => ({
    type: UPDATE_USERS_TO_POST,
});

//shufle to testing app
export function shuffle(array: []): [] {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}
