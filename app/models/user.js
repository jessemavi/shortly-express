var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users'
  // token: function () {
  //   return this.hasOne(Token);
  // }
});

module.exports = User;