import * as Sequelize from 'sequelize';

export default {
    up: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.createTable('posts', {
            Id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                field: 'idPost',
                autoIncrement: true,
                allowNull: false
            },
            user_id: {
                type: Sequelize.DataTypes.INTEGER,
                references: { 
                    model: {
                        tableName: 'users'
                    },
                    key: 'idUser',
                    },
                },
            createdAt: Sequelize.DataTypes.DATE,
            updatedAt: Sequelize.DataTypes.DATE

        });
    },
    down: (queryInterface: Sequelize.QueryInterface) => {
        return queryInterface.dropTable('posts');
    }
}