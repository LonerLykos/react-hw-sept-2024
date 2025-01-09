export const getSomeModel = async <T>(url: string): Promise<T> => {
    return await fetch(url)
        .then(item => item.json())
};


