import express from 'express';
import debug from 'debug';
import listIDUsersUsecase from '../../../domain/usecases/users/listID.users.usecase';
import listUsersUsecase from '../../../domain/usecases/users/list.users.usecase';

const log: debug.IDebugger = debug('app: Users-Middeware');

class UsersMiddlewares {
    async requeridedUserBodyFields(request: express.Request, response: express.Response, next: express.NextFunction) {
        if (request.body.name && request.body.email && request.body.apartment && request.body.password) {
            next()
        } else {
            response.status(400).send('Todos os campos são obrigatórios!');
        }
    }

    async validateUserRepeat(request: express.Request, response: express.Response, next: express.NextFunction) {
        //Verificar se já existe conta baseado no email
        const users = await listUsersUsecase.execute();
        const repeat = users?.find(user=>user.email === request.body.email);
        if(!repeat){
            next()
        } else {
            response.status(404).send('E-mail já cadastrado no sistema.')
        }
    }

    async validateUserExist(request: express.Request, response: express.Response, next: express.NextFunction){
        const user = await listIDUsersUsecase.execute({
            iduser: Number(request.params.userID)
        })
        if(user){
            next()
        } else {
            response.status(404).send('Não foi encontrado nenhum usuário com o ID informado.');
        }
    }
}

export default new UsersMiddlewares();