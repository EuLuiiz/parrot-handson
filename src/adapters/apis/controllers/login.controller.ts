import express from 'express';
import debug from 'debug';
import tokenLoginGenerator from '../../helpers/token.login.generator';
import constantsConfig from '../../../infrastructure/config/constants/constants.config';

const log: debug.IDebugger = debug(constantsConfig.APP.MESSAGES.DEBUG.LOGIN_CONTROLLER);

class loginController {
    async login(request: express.Request, response: express.Response) {
        const login = request.body;
        const token = await tokenLoginGenerator(login)
        response.status(200).send(token);
    }
}

export default new loginController();