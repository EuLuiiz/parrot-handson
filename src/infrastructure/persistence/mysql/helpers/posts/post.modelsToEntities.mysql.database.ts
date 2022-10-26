import { IPostsEntity } from "../../../../../domain/entities/posts/posts.entity";

export default function (post: any): IPostsEntity | undefined {
    if (!post) {
        return;
    }

    let postOne: IPostsEntity = {
        idpost: post.idpost,
        content: post.content,
        user_id: post.user_id
    }

    return (postOne as IPostsEntity)
}