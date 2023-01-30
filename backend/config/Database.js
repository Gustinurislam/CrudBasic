import { Sequelize } from 'sequelize';

const db = new Sequelize('crud_basic_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
