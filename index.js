const { Sequelize } = require('sequelize');
//const user = require('./Models/user.js');

const sequelize = new Sequelize('testnode', 'postgres', 'root', {
    host:'localhost',
    dialect: 'postgres',
    port: '5432'
});

sequelize.authenticate().then(() => {
    console.log('Connexion OK');
}).catch((error) => {
    console.error('Connexion KO', error);
});

//user.test();