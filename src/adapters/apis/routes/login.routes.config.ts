import { CommonRoutesConfig } from "./common.routes.config";
import loginController from "../controllers/login.controller";
import loginMiddleware from "../middlewares/login.middleware";
import express from 'express';

export class LoginRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'LoginRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/login')
            .post(
                loginMiddleware.validateEmail,
                loginMiddleware.validatePassword,
                loginController.login)

        return this.app;
    }
}