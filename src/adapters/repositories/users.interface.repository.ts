import { IUserEntity } from "../../domain/entities/users/user.entity";

export default interface IUserRepository {
    create(data: IUserEntity): Promise<IUserEntity>,
    list(): Promise<IUserEntity[]>,
    listID(id: number): Promise<IUserEntity | undefined>,
    update(data: IUserEntity): Promise<IUserEntity | undefined>,
    delete(id: number): Promise<void>,
}