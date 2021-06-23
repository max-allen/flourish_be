const Podcast = require('./podcast')
const Episode = require('./episode')
const User = require('./user')
const UserPodcast = require('./userPodcast')

Podcast.belongsToMany(User, { through: UserPodcast })
Episode.belongsTo(Podcast)

module.exports = {
  Podcast,
  Episode,
  User,
  UserPodcast
}