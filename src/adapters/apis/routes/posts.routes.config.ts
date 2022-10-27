import { CommonRoutesConfig } from "./common.routes.config";
// postsController
// postsMiddleware
import express from 'express';
import postsController from "../controllers/posts.controller";
import { Auth } from "../middlewares/auth.middleware";

export class PostsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PostsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/posts')
            .all(Auth)
            .get(postsController.listPosts)
            .post(postsController.create)

        this.app.route('/posts/:listById')
            .all(Auth)
            .get(postsController.getPostById)
            .put(postsController.updatePost)
            .delete(postsController.deletePost)

        this.app.route('/posts/:listById/users')
            .all(Auth)
            .get(postsController.listPostIdUser)

        return this.app
    }
}