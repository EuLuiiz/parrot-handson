import express from 'express';
import debug from 'debug';
import tokenLoginGenerator from '../../helpers/token.login.generator';

const log: debug.IDebugger = debug('app:Login-Controller');

class loginController {
    async login(request: express.Request, response: express.Response) {
        const login = request.body;
        const token = await tokenLoginGenerator(login)
        response.status(200).send(token);
    }
}

export default new loginController();