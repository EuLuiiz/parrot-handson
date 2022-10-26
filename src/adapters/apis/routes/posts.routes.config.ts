import { CommonRoutesConfig } from "./common.routes.config";
// postsController
// postsMiddleware
import express from 'express';
import postsController from "../controllers/posts.controller";

export class PostsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PostsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/posts')
            .get(postsController.listPosts)
            .post(postsController.create)

        this.app.route('/posts/:listById')
            .all()
            .get(postsController.getPostById)
            .put(postsController.updatePost)
            .delete(postsController.deletePost)

        return this.app
    }
}