import { Request } from "express";
import { JwtPayload } from 'jsonwebtoken'

//Cria um novo tipo de request
export interface TokenRequest extends Request {
    token: string | JwtPayload
}