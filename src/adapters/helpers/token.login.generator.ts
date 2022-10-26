import jwt from 'jsonwebtoken';
import { secretKey } from '../../infrastructure/config/token/secret';
import listUsersUsecase from '../../domain/usecases/users/list.users.usecase';

export default async function (user: { iduser: number, name: string, email: string, apartment: number, imagelink: string }) {
    const users = await listUsersUsecase.execute();
    const repeat = users?.find(dados => dados.email === user.email);
    const token = jwt.sign({
        iduser: repeat!.iduser,
        name: repeat!.name,
        email: repeat!.email,
        apartment: repeat!.apartment,
        imagelink: repeat!.imagelink
    }, secretKey, {
        expiresIn: '7 days'
    })
    return token;
}