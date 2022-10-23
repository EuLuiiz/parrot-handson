import * as Sequelize from "sequelize";
import { MysqlDatabase } from "../mysql.database";

export default MysqlDatabase.getInstance().createModel('user',{
    iduser:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    name: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    apartment: Sequelize.DataTypes.INTEGER,
    password: Sequelize.DataTypes.STRING,
    createdAt: Sequelize.DataTypes.DATE,
    updatedAt: Sequelize.DataTypes.DATE,
})