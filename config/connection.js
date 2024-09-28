const Sequelize = require('sequelize');
require('dotenv').config(); // Load environment variables

const sequelize = new Sequelize(
  process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
});

module.exports = sequelize;