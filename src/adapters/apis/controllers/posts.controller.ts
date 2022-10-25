import express from 'express';
import debug from 'debug';
import createPostsUsecase from '../../../domain/usecases/posts/create.post.usercase';
import listPostsUsecase from '../../../domain/usecases/posts/list.post.usercase';
import listIDPostsUsecase from '../../../domain/usecases/posts/listById.post.usercase';
import updatePostsUsecase from '../../../domain/usecases/posts/update.post.usercase';
import deletePostsUsecase from '../../../domain/usecases/posts/delete.post.usercase';
import constantsConfig from '../../../infrastructure/config/constants/constants.config';

const log: debug.IDebugger = debug('app:posts-controller');

class PostsController {
    async listPosts(req: express.Request, res: express.Response) {
        const posts = await listPostsUsecase.execute();
        res.status(200).send(posts);
    }

    async getPostById(req: express.Request, res: express.Response) {
        const post = await listPostsUsecase.execute({
            idpost: Number(req.params.idpost)
        });
        res.status(200).send(post);
    }

    async create(req: express.Request, res: express.Response) {
        const post = await createPostsUsecase.execute(req.body);
        log(post);
        res.status(201).send(post);
    }

    async updatePost(req: express.Request, res: express.Response) {
        const post = await updatePostsUsecase.execute(req.body);
        res.status(200).send(post);
    }

    async deletePost(req: express.Request, res: express.Response) {
        const post = await deletePostsUsecase.execute({
            idpost: Number(req.params.idpost)
        });
        res.status(204).send();
    }
}

export default new PostsController();