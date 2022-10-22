import usersRepository from "../../../adapters/repositories/users.repository";
import IUsersRepository from "../../repositories/users.interface.repository";
import { IUseCase } from "../usecase.interface";

export class DeleteUsersUseCase implements IUseCase {
    constructor(private _repository: IUsersRepository) {
    }
    async execute(data: { id: number }): Promise<void> {
        return await this._repository.delete(data.id)
    }
}

export default new DeleteUsersUseCase(usersRepository);