import { IUserEntity } from "../../entities/users/user.entity";
import IUsersRepository from "../../repositories/users.interface.repository";
import { IUseCase } from "../usecase.interface";
import usersRepository from "../../../adapters/repositories/users.repository";

export class ListIDUsersUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(data: { id: number }): Promise<IUserEntity | undefined> {
        return await this._repository.listID(data.id);
    }
}

export default new ListIDUsersUseCase(usersRepository)