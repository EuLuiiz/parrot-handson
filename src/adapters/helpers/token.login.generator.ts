import jwt from 'jsonwebtoken';
import secret from '../../infrastructure/config/token/secret';
import listUsersUsecase from '../../domain/usecases/users/list.users.usecase';

export default async function (user: { iduser: number, name: string, email: string, apartment: number }) {
    const users = await listUsersUsecase.execute();
    const repeat = users?.find(dados => dados.email === user.email);
    const token = jwt.sign({
        iduser: repeat!.iduser,
        name: repeat!.name,
        email: repeat!.email,
        apartment: repeat!.apartment
    }, secret.key)
    return token;
}