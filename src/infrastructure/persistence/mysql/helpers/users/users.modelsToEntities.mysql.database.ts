import { IUserEntity } from "../../../../../domain/entities/users/user.entity";

export default function (user: any): IUserEntity | undefined {
    if (!user) {
        return
    }

    let convertUser = {
        iduser: user.iduser,
        name: user.name,
        email: user.email,
        apartment: user.apartment,
        imagelink: user.imagelink
    }

    return (convertUser as IUserEntity);
}