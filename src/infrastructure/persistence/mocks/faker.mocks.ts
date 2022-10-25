import { IUserEntity } from "../../../domain/entities/users/user.entity";
import IMocks from "./mocks.interface";
import { faker } from '@faker-js/faker';

export default class fakerMocks implements IMocks {
    getUsers(): IUserEntity[] {
        const users: IUserEntity[] = [];
        let nameG, emailG, apartmentG, passwordG, imagelinkG;
        Array.from({ length: 20 }).forEach(() => {
            nameG = faker.name.fullName();
            emailG = faker.helpers.unique(faker.internet.email, [nameG]).toLocaleLowerCase();
            apartmentG = Number(faker.random.numeric(2));
            passwordG = `admin${apartmentG}`;
            imagelinkG = faker.image.cats(640, 480, true)
            users.push({
                name: nameG,
                email: emailG,
                apartment: apartmentG,
                password: passwordG,
                imagelink: imagelinkG
            })
        })
        return users;
    }
}