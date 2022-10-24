import { CommonRoutesConfig } from "./common.routes.config";
import usersController from "../controllers/users.controller";
import usersMiddleware from "../middlewares/users.middleware";
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/users')
            .get(usersController.list)
            .post(
                usersMiddleware.requeridedUserBodyFields,
                usersMiddleware.validateEmailRepeat,
                usersController.create)

        this.app.route('/users/:userID')
            .all(usersMiddleware.validateUserExist)
            .get(usersController.listID)
            .put(usersController.update)
            .delete(usersController.delete)


        return this.app
    }
}