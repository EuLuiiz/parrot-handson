import {UsersRepository} from "../../../adapters/repositories/users.repository";
import { IUserEntity } from "../../entities/users/user.entity";
import createUsersUsecase from "./create.users.usecase";
jest.mock("../../../adapters/repositories/users.repository");

    
    const UsersRepositoryMock = UsersRepository as jest.Mock<UsersRepository>


    test("Teste unitário createUserUseCase", async ()=> {
    
        const userRepository = new UsersRepositoryMock() as jest.Mocked<UsersRepository>;
        userRepository.create.mockRejectedValue({
            "name":"tiago kochen",
            "email":"tiagok989@gmail.com",
            "apartment":123,
            "password": "456",
            "photo":"http://dsjkhsdkljds.com"

            // iduser?: number,
            // name: string,
            // email: string,
            // apartment: number,
            // password: string,
            // imagelink: string
}
        })
    
        const user: IUserEntity = {
            name: "Tiago",
            email: "123123",
            apartment: 15615,
            password: "5161235",
            imagelink: "https://teste.com.br"
        }
    
        expect(await createUsersUsecase.execute(user)).toMatchObject(user)
    })