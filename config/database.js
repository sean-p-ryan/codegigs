const Sequelize = require('sequelize');
module.exports = sequelize = new Sequelize('codegig', 'postgres', 'microg61', {
    host: 'localhost',
    dialect: 'postgres',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });