const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
   'testnode',
   'postgres',
   'root',
    {
      host: 'localhost',
      dialect: 'postgres'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});