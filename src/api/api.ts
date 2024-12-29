const endPoint = "https://jsonplaceholder.typicode.com/";
export const usersApi = {
    getUsers: async () => {
        const response = await fetch(`${endPoint}users`);
        const data = await response.json();
        return data;
    },
};
export const postsApi = {
    getPosts: async () => {
        const response = await fetch(`${endPoint}posts`);
        const data = await response.json();
        return data;
    },
}
