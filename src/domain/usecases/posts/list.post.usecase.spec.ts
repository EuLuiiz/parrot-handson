import listPostUsecase from "./list.post.usercase";

test("Teste unitário ListPostUsercase", async() => {
    expect(await listPostUsecase.execute()).toEqual([]);
});