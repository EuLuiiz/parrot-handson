import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel('post', {
    idpost: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: Sequelize.DataTypes.STRING,
    iduser: Sequelize.DataTypes.INTEGER
})