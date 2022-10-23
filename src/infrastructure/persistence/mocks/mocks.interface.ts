import { IUserEntity } from "../../../domain/entities/users/user.entity";

export default interface IMocks {
    getUsers(): IUserEntity[];
}