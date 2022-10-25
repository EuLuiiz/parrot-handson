import postsRepository from "../../../adapters/repositories/posts.repository";
import { IPostsEntity } from "../../entities/posts/posts.entity";
import IPostsRepository from "../../repositories/posts.interface.repository";
import { IUseCase } from "../usecase.interface";

class ListByIdPostUsecase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(data: {idpost: number}): Promise<IPostsEntity[] | undefined> {
        return await this._repository.listAll(data.idpost);
    }
}

export default new ListByIdPostUsecase(
    postsRepository
)