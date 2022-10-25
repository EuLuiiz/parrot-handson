import { CommonRoutesConfig } from "./common.routes.config";
// postsController
// postsMiddleware
import express from 'express';

export class PostsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PostsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/posts')
            .get()
            .post()

        this.app.route('/posts/:listById')
            .all()
            .get()
            .put()
            .delete()
            
        return this.app
    }
}