import express from 'express';
import debug from 'debug';
import bcrypt from 'bcryptjs';
import listUsersUsecase from '../../../domain/usecases/users/list.users.usecase';

const log: debug.IDebugger = debug('app: Login-Middeware');

class LoginMiddleware {
    async validateEmail(request: express.Request, response: express.Response, next: express.NextFunction) {
        const list = await listUsersUsecase.execute()
        const user = list!.find(user => user.email === request.body.email);

        if (!user) {
            response.status(404).send('E-mail não cadastrado.')
        } else {
            next()
        }
    }

    async validatePassword(request: express.Request, response: express.Response, next: express.NextFunction) {
        const list = await listUsersUsecase.execute()
        const user = list!.find(user => user.email === request.body.email);

        if (!bcrypt.compareSync(request.body.password, user!.password)) {
            response.status(404).send('A senha está incorreta.')
        } else {
            next()
        }

    }

}

export default new LoginMiddleware();