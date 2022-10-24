import express from 'express';
import debug from 'debug';
import bcrypt from 'bcryptjs';
import listUsersUsecase from '../../../domain/usecases/users/list.users.usecase';
import constantsConfig from '../../../infrastructure/config/constants/constants.config';

const log: debug.IDebugger = debug(constantsConfig.APP.MESSAGES.DEBUG.LOGIN_MIDDLEWARE);

class LoginMiddleware {
    async validateEmail(request: express.Request, response: express.Response, next: express.NextFunction) {
        const list = await listUsersUsecase.execute()
        const user = list!.find(user => user.email === request.body.email);

        if (!user) {
            response.status(404).send(constantsConfig.LOGIN.MESSAGES.ERROR.EMAIL_NOT_EXIST)
        } else {
            next()
        }
    }

    async validatePassword(request: express.Request, response: express.Response, next: express.NextFunction) {
        const list = await listUsersUsecase.execute()
        const user = list!.find(user => user.email === request.body.email);

        if (!bcrypt.compareSync(request.body.password, user!.password)) {
            response.status(404).send(constantsConfig.LOGIN.MESSAGES.ERROR.PASSWORD_INCORRECT)
        } else {
            next()
        }
    }

}

export default new LoginMiddleware();