import {FC, memo} from "react";

//функція memo дає можливість кешувати/запам'ятовувати компонент
// який не змінюється для уникнення його рирендирінгу
export const UsersItem: FC<{ foo: () => void, arr:number[] }> = memo(({arr}) => {
    console.log('user');
    console.log(arr);

    return (
        <div>

        </div>
    );
});

