export interface IDummy_Todo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
};

export interface IResponse {
    todos: IDummy_Todo[];
    total: number;
    skip: number;
    limit: number;
};

