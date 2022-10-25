import { MysqlDatabase } from "../mysql.database";
import { DataTypes } from 'sequelize';

export default MysqlDatabase.getInstance().createModel('posts', {
    idpost: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    content: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    user_id: DataTypes.INTEGER
});