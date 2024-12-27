const endPoint = "https://jsonplaceholder.typicode.com/";
export const usersApi = {
    getUsers: () => {
        return fetch(`${endPoint}users`)
            .then((response) => response.json())
            .then((data) => data);
    },
};
