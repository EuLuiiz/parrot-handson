import usersRepository from "../../../adapters/repositories/users.repository";
import { IUserEntity } from "../../entities/users/user.entity";
import IUsersRepository from "../../repositories/users.interface.repository";
import { IUseCase } from "../usecase.interface";

export class UpdateUsersUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(data: IUserEntity): Promise<IUserEntity | undefined> {
        return await this._repository.update(data);
    }
}

export default new UpdateUsersUseCase(usersRepository)