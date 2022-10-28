import jwt from 'jsonwebtoken';
import { secretKey } from '../../infrastructure/config/token/secret.config';
import { IUserEntity } from '../../domain/entities/users/user.entity';

export default async function (user: IUserEntity) {
    if(!user){
        return
    }
    const token = jwt.sign({
        iduser: user!.iduser
    }, secretKey, {
        expiresIn: '2 days'
    })
    return {
        User: user,
        Token: token
    }
}