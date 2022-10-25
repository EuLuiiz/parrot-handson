import { CommonRoutesConfig } from "./common.routes.config";
import usersController from "../controllers/posts.controller";
//import usersMiddleware from "../middlewares/posts.middleware";
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PostsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/posts')
            .get(postsController.list)
            .post(
                usersMiddleware.requeridedUserBodyFields,
                postsController.list)

        this.app.route('/posts/:listById')
            .all(usersMiddleware.validateUserExist)
            .get(usersController.listID)
            .put(usersController.update)
            .delete(usersController.delete)


        return this.app
    }
}