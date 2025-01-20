//створення інтерфейсу для загальної частини респонсу отриманого з апі
export type IBaseResponse = {
    total: number;
    skip: number;
    limit: number;
}

