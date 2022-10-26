import { IPostsEntity } from "../../../../../domain/entities/posts/posts.entity";

export default function (post: any): IPostsEntity | undefined {
    if (!post) {
        return;
    }

    let postOne: IPostsEntity = {
        idpost: post.idpost,
        content: post.content,
        iduser : post.iduser
    }

    return (postOne as IPostsEntity)
}