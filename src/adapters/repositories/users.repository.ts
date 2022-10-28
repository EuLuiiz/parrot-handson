import bcrypt from 'bcryptjs';
import * as Sequelize from 'sequelize';
import { IUserEntity } from '../../domain/entities/users/user.entity';
import IUsersRepository from "../../domain/repositories/users.interface.repository";
import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import usersModelsToEntities from '../../infrastructure/persistence/mysql/helpers/users/users.modelsToEntities.mysql.database';
import postModel from '../../infrastructure/persistence/mysql/models/post.model';
import userModel from '../../infrastructure/persistence/mysql/models/user.model';
import { MysqlDatabase } from '../../infrastructure/persistence/mysql/mysql.database';
import cryptoPassUsers from '../helpers/crypto.pass.users';
import tokenLoginGenerator from '../helpers/token.login.generator';

export class UsersRepository implements IUsersRepository {
    constructor(
        private _database: IDatabaseModel,
        private _modelUsers: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _modelPosts: Sequelize.ModelCtor<Sequelize.Model<any, any>>
    ) {
    }

    async create(data: IUserEntity): Promise<IUserEntity> {
        try {
            data.password = cryptoPassUsers(data.password);
            const newUser = await this._database.create(this._modelUsers, data);
            return data;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    async list(): Promise<IUserEntity[]> {
        try {
            const users = await this._database.list(this._modelUsers);
            return users;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    async listID(id: number): Promise<IUserEntity | undefined> {
        try {
            const user = await this._database.listID(this._modelUsers, id);
            return user;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    async update(data: IUserEntity): Promise<IUserEntity | undefined> {
        try {
            data.password = cryptoPassUsers(data.password);
            const user = await this._database.listID(this._modelUsers, data.iduser!)
            const userAtt = await this._database.update(user, data)
            return userAtt;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const post = await this._database.delete(this._modelPosts, { iduser: id });
            const user = await this._database.delete(this._modelUsers, { iduser: id });
            return
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }


    //Tenho que arrumar o where pra poder enviar o email.
    async listLogin(email: string, password: string): Promise<IUserEntity | undefined> {
        try {
            const foundUser: IUserEntity = await this._database.listOneByWhere(this._modelUsers, {
                email: email
            });
            if (foundUser) {
                if (bcrypt.compareSync(password, foundUser.password)) {
                    return usersModelsToEntities(foundUser);
                } else {
                    return
                }
            } else {
                return
            }
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}

export default new UsersRepository(
    MysqlDatabase.getInstance(),
    userModel,
    postModel
)