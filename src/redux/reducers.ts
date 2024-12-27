import { usersApi } from "../api/api";
import { SET_USERS, setUsers } from "./actions";

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
export interface RootState {
    users: User[];
}

interface Action {
    type: string;
    payload?: {
        users: User[];
    };
}

const initialState: RootState = {
    users: [],
};
export const reducers = (state = initialState, action: Action): RootState => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload?.users || [],
            };

        default:
            return state;
    }
};
export const getUsersThunk = () => (dispatch: Function) => {
    usersApi.getUsers().then((data) => {
        dispatch(setUsers(data));
    });
};
