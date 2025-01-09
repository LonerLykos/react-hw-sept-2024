const baseUrl = "https://dummyjson.com";



export const urls = {
    users: baseUrl + "/users",
    posts: baseUrl + "/posts",
    carts: {
        allCarts: baseUrl + "/carts",
        byUserId: (id: number) => {
            return baseUrl + "/carts" + "/user" + "/" + id;
        },
    }
}