const { Sequelize } = require ('sequelize');

// const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/testnode')

const sequelize = new Sequelize('testnode', 'postgres', 'root', {
    host : 'localhost',
    port: '5432',
    dialect: 'postgres'
});

const start = async function(){
    try{
        await sequelize.authenticate();
        console.log('Connexion OK');
        sequelize.close();
    } catch (error){
        console.error('Connexion KO', error);
    }
}

start();