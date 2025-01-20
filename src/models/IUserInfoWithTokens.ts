//створення інтерфейсу для даних користувача отриманих
//через токен під час логінації

export interface IUserInfoWithTokens {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}