import { IPostsEntity } from "../entities/posts/posts.entity";

export default interface IPostsRepository {
    create(data: IPostsEntity): Promise<IPostsEntity>,
    listAll(): Promise<IPostsEntity[]>,
    listById(id: number): Promise<IPostsEntity | undefined>,
    update(data: IPostsEntity): Promise<IPostsEntity | undefined>,
    deleteId(id: number): Promise<void>,
}