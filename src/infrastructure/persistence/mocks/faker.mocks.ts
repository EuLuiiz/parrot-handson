import { IUserEntity } from "../../../domain/entities/users/user.entity";
import IMocks from "./mocks.interface";
import { faker } from '@faker-js/faker';

export default class fakerMocks implements IMocks {
    getUsers(): IUserEntity[] {
        const users: IUserEntity[] = [];
        Array.from({length:20}).forEach(()=>{
            users.push({
                name: faker.name.fullName(),
                email: faker.internet.email(),
                apartment: Number(faker.random.numeric(2)),
                password: faker.internet.password()
            })
        })
        console.log(users)
        return users;
    }
}