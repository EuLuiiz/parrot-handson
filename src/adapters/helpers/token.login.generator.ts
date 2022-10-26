import jwt from 'jsonwebtoken';
import { secretKey } from '../../infrastructure/config/token/secret';
import listUsersUsecase from '../../domain/usecases/users/list.users.usecase';

export default async function (request: { email: string }) {
    const users = await listUsersUsecase.execute();
    const repeat = users?.find(user => user.email === request.email);
    const token = jwt.sign({
        iduser: repeat!.iduser
    }, secretKey, {
        expiresIn: '2 days'
    })
    return token;
}