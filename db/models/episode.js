
const Sequelize = require('sequelize')
const db = require('../db')

const Episode = db.define('episode', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  audioUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Episode
