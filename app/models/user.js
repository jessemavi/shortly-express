var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users'
  // //Non-functioning constructor for salting things.
  // constructor: function() {
  //   console.log('Constructing a new user with', arguments);

  //   var username = arguments[0].username;
  //   var password = arguments[0].password;
  //   var context = this;
  //   bcrypt.genSalt(function(err, salt) {
  //     if(err) console.error(err);
  //     bcrypt.hash(password, salt, function(err, hashWord) {
  //       if(err) console.error(err);
  //       db.Model.apply(context, {0: {username: username, password: hashWord, salt: salt}});
  //     });
  //   });
  // }
});

module.exports = User;