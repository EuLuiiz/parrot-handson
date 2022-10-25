import * as Sequelize from "sequelize";
import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import { IPostsEntity } from "../../domain/entities//posts/posts.entity";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import IPostsRepository from "../../domain/repositories/posts.interface.repository";
import postsModel from "../../infrastructure/persistence/mysql/models/post.model";
import * as sequelize from "sequelize";

export class PostsRepositories implements IPostsRepository {
  constructor(
    private _database: IDatabaseModel,
    private _postModel: sequelize.ModelCtor<sequelize.Model<any, any>>
  ) { }

  async create(resource: IPostsEntity): Promise<IPostsEntity> {
    const postsModel = await this._database.create(this._postModel, resource)
    return resource;
  }

  async listAll(): Promise<IPostsEntity[]> {
    const posts = await this._database.list(this._postModel);
    return posts;
  }

  async listById(id: number): Promise<IPostsEntity | undefined> {
    return undefined
  }

  async update(data: IPostsEntity): Promise<IPostsEntity | undefined> {
    return undefined
  }

  async deleteId(id: number): Promise<void> {
    return
  }
}

export default new PostsRepositories(
  MysqlDatabase.getInstance(),
  postsModel
)