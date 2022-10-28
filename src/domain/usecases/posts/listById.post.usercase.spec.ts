import { IPostsEntity } from "../../entities/posts/posts.entity";
import listByIdPostUsecase from "./listById.post.usercase";
import createPostUsecase from "./create.post.usercase";

test("Teste unitário listByIdPostUsecase", async ()=> {
    
    const post: IPostsEntity ={

        "content":"Post teste1",
        iduser:1,
    }
await createPostUsecase.execute(post);

    const post2: IPostsEntity = {
        "content":"Post teste2",
        iduser:1,
    }

    expect(await listByIdPostUsecase.execute({idpost:0})).toMatchObject(post2)
})