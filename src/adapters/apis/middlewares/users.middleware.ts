import express from 'express';
import debug from 'debug';
import listIDUsersUsecase from '../../../domain/usecases/users/listID.users.usecase';
import listUsersUsecase from '../../../domain/usecases/users/list.users.usecase';
import constantsConfig from '../../../infrastructure/config/constants/constants.config';

const log: debug.IDebugger = debug(constantsConfig.APP.MESSAGES.DEBUG.USERS_MIDDLEWARE);

class UsersMiddlewares {

    async validateEmailRepeat(request: express.Request, response: express.Response, next: express.NextFunction) {
        const users = await listUsersUsecase.execute();
        const repeat = users?.find(user => user.email === request.body.email);
        if (!repeat) {
            next()
        } else {
            response.status(404).send(constantsConfig.USERS.MESSAGES.ERROR.EMAIL_REPEAT)
        }
    }

    async validateUserExist(request: express.Request, response: express.Response, next: express.NextFunction) {
        const user = await listIDUsersUsecase.execute({
            iduser: Number(request.params.userID)
        })
        if (user) {
            next()
        } else {
            response.status(404).send(constantsConfig.USERS.MESSAGES.ERROR.USER_NOT_EXIST);
        }
    }
}

export default new UsersMiddlewares();