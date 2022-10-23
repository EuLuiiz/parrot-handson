import { result } from "lodash";
import { IUserEntity } from "../../../domain/entities/users/user.entity";
import createUsersUsecase from "../../../domain/usecases/users/create.users.usecase";
import FakerMocks from "./faker.mocks";
import IMocks from "./mocks.interface";

class Mocks {
    private _users: IUserEntity[];
    constructor(mocksGenerator: IMocks) {
        this._users = mocksGenerator.getUsers();
    }
    async createUsers() {
        let count = 0
        for (count = 0; count < this._users.length; count++) {
            await createUsersUsecase.execute(this._users[count])
        }
        return {
            CreatedUsers: count
        }
    }
}

const mocks = new Mocks(new FakerMocks);

mocks.createUsers().then((result) => {
    console.log(result)
});