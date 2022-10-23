import { CommonRoutesConfig } from "./common.routes.config";
//controller
//middleware
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/users')
            .get()


        return this.app
    }
}