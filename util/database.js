const Sequelize = require('sequelize');

const sequelize = new Sequelize('db', 'user', 'password', {
  host: 'mysql',
  dialect: 'mysql',
});

module.exports = sequelize;
