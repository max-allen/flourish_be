const Podcast = require('./podcast')
const Episode = require('./episode')
const User = require('./user')
const UserPodcast = require('./userPodcast')
const Playlist = require('./playlist')
const PlaylistItem = require('./playlistItem')

Podcast.belongsToMany(User, { through: UserPodcast })
Episode.belongsTo(Podcast)
Playlist.belongsTo(User)

PlaylistItem.belongsTo(User)
Playlist.hasMany(PlaylistItem)
Episode.hasMany(PlaylistItem)
User.hasMany(PlaylistItem)

module.exports = {
  Podcast,
  Episode,
  User,
  UserPodcast,
  Playlist,
  PlaylistItem
}
