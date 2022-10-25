import postsRepository from "../../../adapters/repositories/posts.repository";
import { IPostsEntity } from "../../entities/posts/posts.entity";
import { IPostsRepository } from "../../repositories/posts.interface.repository";
import { IUseCase } from "../usecase.interface";

class UpdatePostUseCase implements IUseCase {

    constructor (private _repository: IPostsRepository) {}

    async execute(data: IPostsEntity): Promise<IPostsEntity | undefined> {
        return await this._repository.update(data);
    }
}
export default new UpdatePostUseCase(
    postsRepository
)