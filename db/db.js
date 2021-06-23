const Sequelize = require('sequelize')

const db = new Sequelize(
  'flourish',
  null,
  null,
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  }
)

module.exports = db
