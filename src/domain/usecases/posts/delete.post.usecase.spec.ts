import deletePostUsecase from "./delete.post.usercase";

test("Teste unitário DeletePostUserCase", async() => {
    const post = {
        idpost:0
    }
    expect(await deletePostUsecase.execute(post)).toBeUndefined();
})