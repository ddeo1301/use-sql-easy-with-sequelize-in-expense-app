const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Divyanshu@97', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
