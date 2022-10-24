import jwt from 'jsonwebtoken';
import secret from '../../infrastructure/config/token/secret';

export default function (user: { iduser: number, name: string, email: string, apartment: number }) {
    const token = jwt.sign({
        iduser: user.iduser,
        name: user.name,
        email: user.email,
        apartment: user.apartment
    }, secret.key)
    return token;
}