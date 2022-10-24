import { expressjwt } from 'express-jwt';
import secret from '../../../infrastructure/config/token/secret';

export default expressjwt({
    secret: secret.key,
    algorithms: ['HS256']
})