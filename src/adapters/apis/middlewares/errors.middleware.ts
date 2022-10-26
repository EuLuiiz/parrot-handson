import express from 'express';
import { Request as JWTRequest } from 'express-jwt'
import constantsConfig from '../../../infrastructure/config/constants/constants.config';

class Errors {
    errorToken(error: express.ErrorRequestHandler, request: JWTRequest, response: express.Response, next: express.NextFunction) {
        if (error.name === constantsConfig.TYPES_ERROR.UNAUTHORIZED) {
            response.status(401).send(constantsConfig.AUTH.MESSAGES.ERROR.TOKEN_INVALID);
        }
    }
}

export default new Errors();