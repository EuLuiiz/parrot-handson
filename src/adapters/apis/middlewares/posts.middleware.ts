import express from 'express'
import listByIdPostUsercase from '../../../domain/usecases/posts/listById.post.usercase'

class PostsMiddleware {
    async validatePostExist(request: express.Request, response: express.Response, next: express.NextFunction){
        const post = await listByIdPostUsercase.execute({
            idpost: Number(request.params.listById)
        })
        if(post){
            next()
        } else {
            response.status(404).send('Não foi encontrado nenhuma postagem com o ID informado.')
        }
    }
}

export default new PostsMiddleware();