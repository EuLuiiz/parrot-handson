import postsRepository from "../../../adapters/repositories/posts.repository";
import usersRepository from "../../../adapters/repositories/users.repository";
import { IPostsEntity } from "../../entities/posts/posts.entity";
import IPostsRepository from "../../repositories/posts.interface.repository";
import IUsersRepository from "../../repositories/users.interface.repository";

import { IUseCase } from "../usecase.interface";

class ListPostIdPostUsecase implements IUseCase{
    constructor(private _repository: IPostsRepository){

    }
    async execute(data: {iduser:number}): Promise<IPostsEntity[] | undefined> {
       return await this._repository.listByUser(data.iduser)
    }
}

export default new ListPostIdPostUsecase(
    postsRepository
)