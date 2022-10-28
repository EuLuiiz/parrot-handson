import { StringColorFormat } from "@faker-js/faker";
import { IUserEntity } from "../entities/users/user.entity";

export default interface IUsersRepository {
    create(data: IUserEntity): Promise<IUserEntity>,
    list(): Promise<IUserEntity[]>,
    listID(id: number): Promise<IUserEntity | undefined>,
    update(data: IUserEntity): Promise<IUserEntity | undefined>,
    delete(id: number): Promise<void>,
    listLogin(email: string, password: string): Promise<IUserEntity | undefined>
}