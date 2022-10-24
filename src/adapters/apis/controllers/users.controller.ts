import express from 'express';
import debug from 'debug';
import createUsersUsecase from '../../../domain/usecases/users/create.users.usecase';
import listUsersUsecase from '../../../domain/usecases/users/list.users.usecase';
import listIDUsersUsecase from '../../../domain/usecases/users/listID.users.usecase';
import updateUsersUsecase from '../../../domain/usecases/users/update.users.usecase';
import deleteUsersUsecase from '../../../domain/usecases/users/delete.users.usecase';

const log: debug.IDebugger = debug('app:Users-Controller');

class UsersControllers {
    async create(request: express.Request, response: express.Response) {
        const user = await createUsersUsecase.execute(request.body);
        response.status(201).send(user);
    }

    async list(request: express.Request, response: express.Response) {
        const users = await listUsersUsecase.execute();
        response.status(200).send(users);
    }

    async listID(request: express.Request, response: express.Response) {
        const userID = await listIDUsersUsecase.execute({
            iduser: Number(request.params.userID),
        })
        response.status(200).send(userID);
    }

    async update(request: express.Request, response: express.Response) {
        const user = request.body;
        user.iduser = request.params.userID;
        const updated = await updateUsersUsecase.execute(user);
        response.status(200).send(user)
    }

    async delete(request: express.Request, response: express.Response) {
        const user = await deleteUsersUsecase.execute({
            iduser: Number(request.params.userID),
        })
        response.status(204).send();
    }
}

export default new UsersControllers();