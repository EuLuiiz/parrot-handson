import { CommonRoutesConfig } from "./common.routes.config";
import usersController from "../controllers/users.controller";
//middleware
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/users')
            .get(usersController.list)
            .post(usersController.create)

        this.app.route('/users/:userID')
            .get(usersController.listID)
            .put(usersController.update)
            .delete(usersController.delete)


        return this.app
    }
}