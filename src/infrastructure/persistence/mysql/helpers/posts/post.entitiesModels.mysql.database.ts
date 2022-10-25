import { IPostsEntity } from "../../../../../domain/entities/posts/posts.entity";

export default function (post: IPostsEntity) {

    const postSingle = {
        idpost: post.idpost,
        content: post.content,
        iduser: post.iduser
    }

    return { postSingle: postSingle};
}