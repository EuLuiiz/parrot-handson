import usersRepository from "../../../adapters/repositories/users.repository";
import { IUserEntity } from "../../entities/users/user.entity";
import IUsersRepository from "../../repositories/users.interface.repository";
import { IUseCase } from "../usecase.interface";

export class ListUsersUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(): Promise<IUserEntity[] | undefined> {
        return await this._repository.list()
    }
}

export default new ListUsersUseCase(usersRepository)