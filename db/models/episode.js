
const Sequelize = require('sequelize')
const db = require('../db')

const Episode = db.define('episode', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.STRING(1024)
  },
  imageUrl: {
    type: Sequelize.STRING(1024)
  },
  audioUrl: {
    type: Sequelize.STRING(1024)
  }
})

module.exports = Episode
