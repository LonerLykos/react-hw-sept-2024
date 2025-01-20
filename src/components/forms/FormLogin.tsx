import {useForm} from "react-hook-form";
import {login, LoginData} from "../../services/api.service.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginValidator} from "../validator/login.validator.ts";
import {useState} from "react";
import "./FormLogin.css"
import {useNavigate} from "react-router-dom";

//створюємо функцію компонента форми
export const FormLogin = () => {
    //створюємо об'єкт залежностей для useForm, задаємо режим
    // та додаємо resolver Joi підключаючи валідатор
    const {handleSubmit, register, formState: {errors, isValid}, reset}
        = useForm<LoginData>({mode: 'onChange', resolver: joiResolver(loginValidator)});

    //за допомогою useState визначаємо помилку та її повідомлення
    const [error, setError] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    //додаємо useNavigate для переходу після заповнення форми
    const navigate = useNavigate();

    //визначаємо умови роботи нашого хендлеру
    const myHandler = async (currentData: LoginData) => {

        //через try/catch для отримання можливих помилок і виведення їх в консоль
        try {

            //для коректнної роботи форми додаємо умову перевірки
            //відповідності паролю до логіну
            if (currentData.password.includes(currentData.username)) {

                //створюємо об'єкт LoginData для відправки форми логінації
                let loginData: LoginData = {
                    username: currentData.username,
                    password: currentData.password,
                    expiresInMins: 1,
                };

                //встановлюємо сторінку переходу
                navigate("/home");

                //для відключення показу помилки встановлюємо
                // значення помилки false і додаємо путе повідомлення
                setError(false);
                setMessage('')

                //логінимось через функцію з сервісів
                await login(loginData);

                //чистимо форму
                reset();

            } else {

                //якщо перевірка не пройшла встановлюємо значення
                // помилки true і додаємо повідомлення
                setError(true);
                setMessage('Current user need current password');

                //чистимо форму
                reset();
            }


        } catch (error) {
            //ловимо і виводимо в консоль помилку логінації якщо така є
            console.error('Error while sending data:', error)
        }
    };


    return (

        <div>
            <h1>Sing In</h1>
            {/*на форму вішаємо подію залежну від нашого Handler*/}
            <form onSubmit={handleSubmit(myHandler)}>
                <div className='wrap-input'>
                    <label>
                        <select {...register('username')} defaultValue="">
                            <option value="" disabled>Виберіть користувача...</option>
                            <option value="emilys">Користувач 1</option>
                            <option value="avah">Користувач 2</option>
                        </select>
                    </label>

                    <p className={!errors.username ? 'hide' : 'view'}>{!errors.username ? '' : errors.username.message}</p>
                </div>
                <div className='wrap-input'>
                    <label>
                        <select {...register('password')} defaultValue="">
                            <option value="" disabled>Виберіть пароль...</option>
                            <option value="emilyspass">Пароль 1</option>
                            <option value="avahpass">Пароль 2</option>
                        </select>
                    </label>

                    <p className={!errors.password ? 'hide' : 'view'}>{!errors.password ? '' : errors.password.message}</p>
                </div>

                <button disabled={!isValid}>Login</button>

                <p className={!error ? 'hide' : 'view'}>{message}</p>
            </form>
        </div>
    );
};

