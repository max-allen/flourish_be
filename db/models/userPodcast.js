const Sequelize = require('sequelize')
const db = require('../db')

const UserPodcast = db.define('user_podcast')

module.exports = UserPodcast