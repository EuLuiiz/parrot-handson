import { validate, Joi } from 'express-validation'


class ValidationsMiddleware {
    login = validate({
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    });

    //Por algum motivo milagroso o Posts não funciona, mesmo estando correto, retorna erro
    posts = validate({
        body: Joi.object({
            content: Joi.string().required()
        })
    });

    users = validate({
        body: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            apartment: Joi.number().required(),
            password: Joi.string().required(),
            imagelink: Joi.string().required()
        })
    });
}

export default new ValidationsMiddleware();