import * as Sequelize from "sequelize";
import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import { IPostsEntity } from "../../domain/entities//posts/posts.entity";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import IPostsRepository from "../../domain/repositories/posts.interface.repository";
import postsModel from "../../infrastructure/persistence/mysql/models/post.model";
import * as sequelize from "sequelize";
import postEntitiesToModelsMysqlDatabase from "../../infrastructure/persistence/mysql/helpers/posts/post.entitiesToModels.mysql.database";
import logger from "../../infrastructure/logs/winston.logs";
import postModelsToEntitiesMysqlDatabase from "../../infrastructure/persistence/mysql/helpers/posts/post.modelsToEntities.mysql.database";

export class PostsRepositories implements IPostsRepository {
  constructor(
    private _database: IDatabaseModel,
    private _postModel: sequelize.ModelCtor<sequelize.Model<any, any>>
  ) { }

  async create(resource: IPostsEntity): Promise<IPostsEntity> {
    try {
      const { postOne } = postEntitiesToModelsMysqlDatabase(resource);
      const postModel = await this._database.create(this._postModel, postOne);
      resource.idpost = postModel.null;
      logger.info(`Ok create.`);
      return postModel;
  } catch (error) {
      logger.error('Erro no create do PostRepository:', error);
      throw new Error((error as Error).message);
  }
  
}
  async listAll(): Promise<IPostsEntity[]> {
    try {
      const posts = await this._database.list(this._postModel);
      const postList = posts.map(postModelsToEntitiesMysqlDatabase);
      logger.info(`PostRepository Ok.`);
      return postList;
  } catch (error) {
      logger.error('Erro PostRepository:', error);
      throw new Error((error as Error).message);
  }
}

  async listById(id: number): Promise<IPostsEntity | undefined> {
    try {
      const postOne = await this._database.listID(this._postModel, id);
      logger.info(`Executado listID do PostRepository.`);
      return postModelsToEntitiesMysqlDatabase(postOne);
  }
  catch(error) {
      logger.error('Erro no readById do PostRepository:', error);
      throw new Error((error as Error).message);
  }
}

  async update(id: IPostsEntity): Promise<IPostsEntity | undefined> {
    try {
      let postModel = await this._database.listID(this._postModel, id.idpost!);
      const { postOne } = postEntitiesToModelsMysqlDatabase(id);
      await this._database.update(postModel, postOne);
      logger.info(`Executado updateById do PostRepository.`);
      return id;
  } catch (error) {
      logger.error('Erro no updateById do PostRepository:', error);
      throw new Error((error as Error).message);
  }
  
}

  async deleteId(id: number): Promise<void> {
    return
  }
}

export default new PostsRepositories(
  MysqlDatabase.getInstance(),
  postsModel
)