import { IPostsEntity } from "../../../domain/entities/posts/posts.entity";
import { IUserEntity } from "../../../domain/entities/users/user.entity";

export default interface IMocks {
    getUsers(): IUserEntity[];
    getPosts(): IPostsEntity[];
}