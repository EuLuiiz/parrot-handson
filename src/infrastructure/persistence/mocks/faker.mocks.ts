import { IUserEntity } from "../../../domain/entities/users/user.entity";
import IMocks from "./mocks.interface";
import { faker } from '@faker-js/faker';
import { IPostsEntity } from "../../../domain/entities/posts/posts.entity";

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
    getPosts(): IPostsEntity[] {
        const posts: IPostsEntity[] = [];
        let contentG, iduserG;
        Array.from({ length: 60 }).forEach(() => {
            contentG = faker.lorem.words(Number(faker.finance.amount(1, 30, 0)));
            iduserG = Number(faker.finance.amount(1, 20, 0));
            posts.push({
                content: contentG,
                iduser: iduserG
            })
        })
        return posts;
    }
}