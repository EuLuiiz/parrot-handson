import { IPostsEntity } from "../../entities/posts/posts.entity";
import CreatePostUsecase from "./create.post.usercase";
import UpdatePostUsecase from "./update.post.usercase";


test("Teste unitário UpdateClientUseCase", async ()=> {
    
    const post: IPostsEntity ={

        "content":"Um post ",
        iduser:1,
    }
await CreatePostUsecase.execute(post);

    const post2: IPostsEntity = {
        "content":"Um post2",
        iduser:1,
    }

    const post3: IPostsEntity = {
        "content":"Um post3",
        iduser:1,
    }

    expect(await UpdatePostUsecase.execute(post2)).toMatchObject(post3)
})