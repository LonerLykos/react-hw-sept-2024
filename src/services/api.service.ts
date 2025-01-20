import axios from 'axios';
import {IUserInfoWithTokens} from "../models/IUserInfoWithTokens.ts";
import {IUsers} from "../models/IUsers.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";
import {IBaseResponse} from "../models/IBaseResponse.ts";
import {IPosts} from "../models/IPosts.ts";

//створюємо типізацію для логінації в системі та експортуємо для
// використання її в компоненті форми
export type LoginData = {
    username: string;
    password: string;

    //час валідності отриманого access токена
    expiresInMins: number
}

//створюємо базу для роботи з апі через axios з префіксом auth
//для роботи з апі як аутентифікований користувач і для логінації
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

//виводимо загальну допоміжну частину для доповнення наших запитів
//токенами для аутентифікованого доступу

//використовуємо метод axios для перехоплення запитів до апі
//requestObject об'єкт конфігурації запиту
axiosInstance.interceptors.request.use((requestObject) => {

    //перевіряємо чи використаний метод запиту є методом GET
    if (requestObject.method?.toUpperCase() === 'GET') {

        //якщо це метод get то встановлюємо заголовок авторизації
        //як Bearer + наш access токен який підтягнули
        // з локального сховища через метод retriveLocalStorage
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserInfoWithTokens>('user').accessToken
    }
    return requestObject;

})

//функція яка виконує логінацію яка приймає в себе об'єкт
//типу LoginData
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserInfoWithTokens> => {

    //використовуємо axios з методом post для аутентифікації
    //в запит додаємо необхідну частину урли та передаємо об'єкт типу LoginData
    //для входу як авторизований користувач
    //і одразу деструктуруємо отриманий респонс для отримання
    //об'єкту що містить інформацію про авторизованого користувача разом з токенами
    const {data: userWithTokens} = await axiosInstance.post<IUserInfoWithTokens>('/login', {username, password, expiresInMins});

    //зберігаємо в локальний сховок отримані дані для подальшого використання
    localStorage.setItem('user', JSON.stringify(userWithTokens));

    return userWithTokens;
}

//авторизований запит до апі на отримання юзерів
export const loadAuthUsers = async (): Promise<IUsers[]> => {

    //деструктуруємо юзерів по запиту до апі
    const {data: {users}} = await axiosInstance.get<IBaseResponse & {users: IUsers[]}>('/users');

    //і повертаємо їх
    return users
}

//авторизований запит до апі на отримання постів
export const loadAuthPosts = async (): Promise<IPosts[]> => {

    //деструктуруємо пости по запиту до апі
    const {data: {posts}} = await axiosInstance.get<IBaseResponse & {posts: IPosts[]}>('/posts');

    //і повертаємо їх
    return posts
}

//функція заміни поточного токену на новий
export const refresh = async () => {

    //витягаємо дані з локал сторедж
    const iUserWithTokens = retriveLocalStorage<IUserInfoWithTokens>('user');

    // виконуємо постовий запит з використанням refresh токену
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });

    //перевизначаємо поточні значення токенів на нові отримані з апі
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;

    //перезаписуємо оновлені токени до локал стореджу
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));


}