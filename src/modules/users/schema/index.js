const Joi = require('joi')
const { VENEZUELAN_ID_REGEX } = require('../../../common/constants')

const createUserSchema = Joi.object({
    id: Joi.string().regex(VENEZUELAN_ID_REGEX).required().messages({
        'string.pattern.base': 'Id must be a valid venezuelan id',
        'any.required': 'Id is required'
    }),
    username: Joi.string().required().messages({
        'any.required': 'Username is required'
    }),
    password: Joi.string().required().messages({
        'any.required': 'Password is required'
    })
})

const updateUserSchema = Joi.object({
    username: Joi.string().required().messages({
        'any.required': 'Username is required'
    }),
    password: Joi.string().required().messages({
        'any.required': 'Password is required'
    })
})


module.exports = {
    createUserSchema,
    updateUserSchema
}