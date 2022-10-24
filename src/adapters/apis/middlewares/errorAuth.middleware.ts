import express from 'express';
import { Request as JWTRequest } from 'express-jwt'

class ErrorAuth {
    errorToken(error: express.ErrorRequestHandler, request: JWTRequest, response: express.Response, next: express.NextFunction) {
        if (error.name === 'UnauthorizedError') {
            response.status(401).send('Token Inválido!');
        }
    }
}

export default new ErrorAuth();