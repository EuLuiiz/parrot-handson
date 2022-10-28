import tokenLoginGenerator from "../../../adapters/helpers/token.login.generator";
import usersRepository from "../../../adapters/repositories/users.repository";
import IUsersRepository from "../../repositories/users.interface.repository";
import { IUseCase } from "../usecase.interface";

class LoginUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(data: { email: string, password: string }) {
        const user = await this._repository.listLogin(data.email, data.password);
        const token = await tokenLoginGenerator(user!)
        return token
    }
}

export default new LoginUseCase(usersRepository)