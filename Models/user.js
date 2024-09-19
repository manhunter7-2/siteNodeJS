const { DataTypes, Sequelize, Model } = require('sequelize');

const sequelize = new Sequelize('testnode', 'postgres', 'root', {
    host:'localhost',
    dialect: 'postgres',
    port: '5432'
});

class User extends Model{}

User.init(
    {
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        bdayDate:{
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        modelName: User,
    },
);

function test(){
    return "TEST";
}