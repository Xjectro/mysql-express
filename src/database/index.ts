import dbConfig from '../config/db.config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  port: dbConfig.PORT,
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync();
    console.log('Database & tables synchronized successfully!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export { sequelize, dbConnection };
