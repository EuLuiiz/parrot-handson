import express from 'express';
import debug from 'debug';
import tokenLoginGenerator from '../../helpers/token.login.generator';
import constantsConfig from '../../../infrastructure/config/constants/constants.config';
import loginUsecase from '../../../domain/usecases/login/login.usecase';

const log: debug.IDebugger = debug(constantsConfig.APP.MESSAGES.DEBUG.LOGIN_CONTROLLER);

class loginController {
    async login(request: express.Request, response: express.Response) {
        const token = await loginUsecase.execute(request.body);
        if (!token) {
            response.status(404).send({
                error: 'Email ou senha incorreta.'
            })
        }
        response.status(200).send(token)
    }
}

export default new loginController();