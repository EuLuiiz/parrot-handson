import postsRepository from "../../../adapters/repositories/posts.repository";
import IPostsRepository from "../../repositories/posts.interface.repository";
import { IUseCase } from "../usecase.interface";

class DeletePostsUsecase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(data: {id: number}): Promise<void > {
        return await this._repository.deleteId(data.id)        
    }
}

export default new DeletePostsUsecase(
    postsRepository
)