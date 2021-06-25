const Sequelize = require('sequelize')
const db = require('../db')

const PlaylistItem = db.define('playlist_item', {
  position: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = PlaylistItem

