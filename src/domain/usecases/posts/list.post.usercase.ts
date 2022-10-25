import postsRepository from "../../../adapters/repositories/posts.repository";
import { IPostsEntity } from "../../entities/posts/posts.entity";
import IPostsRepository from "../../repositories/posts.interface.repository";
import { IUseCase } from "../usecase.interface";

class ListAllPostUsecase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(): Promise<IPostsEntity[] | undefined> {
        return await this._repository.listAll();
    }
}

export default new ListAllPostUsecase(
    postsRepository
)