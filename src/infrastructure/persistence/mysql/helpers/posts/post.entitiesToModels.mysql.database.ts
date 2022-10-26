import { IPostsEntity } from "../../../../../domain/entities/posts/posts.entity";

export default function (post: IPostsEntity) {

    const postOne = {
        idpost: post.idpost,
        content: post.content,
        user_id: post.user_id
    }

    return { postOne: postOne};
}