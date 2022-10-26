import postsRepository from "../../../adapters/repositories/posts.repository";
import { IPostsEntity } from "../../entities/posts/posts.entity";
import IPostsRepository from "../../repositories/posts.interface.repository";
import { IUseCase } from "../usecase.interface";

class ListIdPostUsecase implements IUseCase{
    constructor(private _repository: IPostsRepository){}
    async execute(data: {idpost: number}): Promise<IPostsEntity[] | undefined> {
       return await this._repository.listAll();//METODO TEM QUE SER listByID mas ta dando erro
        //return await this._repository.listById(data.idpost);
    }
}

export default new ListIdPostUsecase(
    postsRepository
)