import postsRepository from "../../../adapters/repositories/posts.repository";
import usersRepository from "../../../adapters/repositories/users.repository";
import { IPostsEntity } from "../../entities/posts/posts.entity";
import IPostsRepository from "../../repositories/posts.interface.repository";
import IUsersRepository from "../../repositories/users.interface.repository";

import { IUseCase } from "../usecase.interface";

class ListIdPostUsecase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(data: {id: number}): Promise<IPostsEntity | undefined> {
       return await this._repository.listByUser(data.id, a);
    }
}

export default new ListIdPostUsecase(
    postsRepository,

)