import { MysqlDatabase } from "../mysql.database";
import * as Sequelize from 'sequelize';

export default MysqlDatabase.getInstance().createModel('posts', {
    idpost: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
    },
    iduser: {
        type: Sequelize.DataTypes.INTEGER,
        field: 'iduser'
    },
   contentText:{
   type:  Sequelize.DataTypes.STRING,
   field: 'content_text'
    } ,
   createdAt: {
    type: Sequelize.DataTypes.DATE,
    field: 'createdAt'
    },
    updatedAt: {
    type: Sequelize.DataTypes.DATE,
    field: 'updatedAt'
    }
});