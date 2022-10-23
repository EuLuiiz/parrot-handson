import bcrypt from 'bcryptjs';

export default function (password: string) {
    const passSecure = bcrypt.hashSync(password, 10);
    return passSecure;
}