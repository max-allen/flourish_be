const Sequelize = require('sequelize')
const db = require('../db')

const Podcast = db.define('podcast', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.STRING(1024)
  },
  feedUrl: {
    type: Sequelize.STRING
  },
  iconUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Podcast
