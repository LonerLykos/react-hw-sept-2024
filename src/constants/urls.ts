const baseUrl = "https://dummyjson.com";


export const urls = {
    users: baseUrl + "/users",
    paginationUsers: (params:string) => {
        return baseUrl + "/users/?limit=10&skip=" + params;
    },
};