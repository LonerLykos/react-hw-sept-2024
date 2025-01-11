const baseUrl = "https://dummyjson.com";


export const urls = {
    users: baseUrl + "/users",
    carts: {
        allCarts: baseUrl + "/carts",
        byUserId: (id: number) => {
            return baseUrl + "/carts" + "/user" + "/" + id;
        },
    }
};

export const pathHW = {
    hwTask2: {
        main: 'hw-3-2',
        cart: ':id/cart',
    },
    hwTask3: {
        main: 'hw-3-3',
        cart: 'hw-3-3/:id/cart',
    }
}

