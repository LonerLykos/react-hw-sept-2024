import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base':'Brand must have 1-20 chars',
        'string.empty':'Brand can`t be empty',
    }),

    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min' : 'min price is  0',
        'number.max' : 'Price can`t be greater than 1000000',
        'number.base' : 'Price must be',
    }),

    year: Joi.number().min(1990).max(2024).required().messages({
        'number.min' : 'Year must be greater than 1990',
        'number.max' : 'Year can`t be least than 2024',
        'number.base' : 'Year must be',
    }),
})