export const SET_USERS = "SET_USERS";

export const setUsers = (users:Array<object>)=> ({
    type: SET_USERS,
    payload: {users}
});

