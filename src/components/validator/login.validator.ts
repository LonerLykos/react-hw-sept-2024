import Joi from "joi";

//перевірка на валідність заповненої форми
export const loginValidator = Joi.object({
    username: Joi.string().valid('emilys', 'avah').required().messages({
        "any.required": "Будь ласка, виберіть користувача",
        "any.only": "Невірне значення користувача"
    }),

    password: Joi.string().valid('emilyspass', 'avahpass').required().messages({
        "any.required": "Будь ласка, виберіть пароль",
        "any.only": "Невірне значення пароля"
    }),
});
