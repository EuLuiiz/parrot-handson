import { CommonRoutesConfig } from "./common.routes.config";
import usersController from "../controllers/users.controller";
import usersMiddleware from "../middlewares/users.middleware";
import express from 'express';
import validationsMiddleware from "../middlewares/validations.middleware";
import { Auth } from "../middlewares/auth.middleware";
import errorsMiddleware from "../middlewares/errors.middleware";

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/users')
            .get(usersController.list)
            .post(
                validationsMiddleware.users,
                usersMiddleware.validateEmailRepeat,
                usersController.create)

        this.app.route('/users/:userID')
            .all(Auth,
                usersMiddleware.validateUserExist)
            .get(usersController.listID)
            .put(
                validationsMiddleware.users,
                usersController.update)
            .delete(usersController.delete)


        return this.app
    }
}