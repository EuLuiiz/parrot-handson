import * as Sequelize from "sequelize";

import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import { IPostsEntity } from "../../domain/entities//posts/posts.entity";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { IPostsRepository } from "../../domain/repositories/posts.interface.repository";

import postsModel from "../../infrastructure/persistence/mysql/models/post.model";
import entityToModelPost from "../../infrastructure/persistence/mysql/helpers/posts/entityToModel.post.mysql";
import modelToEntityPostMysql from "../../infrastructure/persistence/mysql/helpers/posts/modelToEntity.post.mysql";
import * as sequelize from "sequelize";
import entityToModelPostMysql from "../../infrastructure/persistence/mysql/helpers/posts/entityToModel.post.mysql";

export class PostsRepositories implements IPostsRepository {

    constructor(
    private _database:IDatabaseModel,
    private _postModel: sequelize.ModelCtor<sequelize.Model<any, any>>
    ){}
    
    async create(resource: IPostsEntity): Promise<IPostsEntity> {
        const {Post} = entityToModelPost(resource);
        const postsModel = await this._database.create(this._postModel, Post)

        return resource
    } 
    
    async listAll():Promise<IPostsEntity[]>{
      const postsModel = await this._database.list(this._postModel)
      const post = postsModel.map(modelToEntityPostMysql)

      return post

    }



}

export default new PostsRepositories(
 MysqlDatabase.getInstance(),
 postsModel

)