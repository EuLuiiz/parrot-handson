import { IPostsEntity } from "../../../domain/entities/posts/posts.entity";
import { IUserEntity } from "../../../domain/entities/users/user.entity";
import createPostUsercase from "../../../domain/usecases/posts/create.post.usercase";
import createUsersUsecase from "../../../domain/usecases/users/create.users.usecase";
import FakerMocks from "./faker.mocks";
import IMocks from "./mocks.interface";

class Mocks {
    private _users: IUserEntity[];
    private _posts: IPostsEntity[];
    constructor(mocksGenerator: IMocks) {
        this._users = mocksGenerator.getUsers();
        this._posts = mocksGenerator.getPosts();
    }
    async createUsers() {
        let count;
        for (count = 0; count < this._users.length; count++) {
            await createUsersUsecase.execute(this._users[count])
        }
        return {
            CreatedUsers: count
        }
    }
    async createPosts() {
        let count;
        for (count = 0; count < this._posts.length; count++) {
            await createPostUsercase.execute(this._posts[count])
        }
        return {
            CreatedPosts: count
        }
    }
}

const mocks = new Mocks(new FakerMocks);

mocks.createUsers().then( (result) => {
    console.log(result)
}).then(()=>{
    mocks.createPosts().then((results)=>{
        console.log(results)
    })
})