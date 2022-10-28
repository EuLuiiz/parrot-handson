import { secretKey } from '../../../infrastructure/config/token/secret.config';
import express from 'express'
import jwt from 'jsonwebtoken'
import { TokenRequest } from '../../../domain/usecases/token/token.request.interface';

export const Auth = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    try {
        const token = request.header('Authorization')?.split(' ')[1]
        if (!token) {
            response.status(401).send('Não foi possível obter autenticação');
        } else {
            const decode = jwt.verify(token, secretKey);
            if (typeof decode == 'string') {
                response.status(401).send('Não foi possível obter autenticação');
            } else {
                request.body.info = decode;
                (request as TokenRequest).token = decode;
                next();
            }
        }
    } catch (error) {
        console.log(error)
        response.status(401).send('Não foi possível obter autenticação');
    }
}