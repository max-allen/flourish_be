const crypto = require('crypto')

const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt')
    }
  }
})

User.prototype.correctPassword = function correctPassword(password) {
  return User.encryptPassword(password, this.salt()) === this.password()
}

User.generateSalt = () => crypto.randomBytes(16).toString('base64')

User.encryptPassword = (plainText, salt) => crypto.createHash('RSA-SHA256')
  .update(plainText)
  .update(salt)
  .digest('hex')

const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  }
}

User.beforeCreate(setSaltAndPassword)


module.exports = User
