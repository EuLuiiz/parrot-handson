import { CommonRoutesConfig } from "./common.routes.config";
import loginController from "../controllers/login.controller";
import express from 'express';
import validationsMiddleware from "../middlewares/validations.middleware";

export class LoginRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'LoginRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/login')
            .post(
                validationsMiddleware.login,
                loginController.login)

        return this.app;
    }
}