var crypto = require('crypto');
var async = require('async');
var util = require('util');

var mongoose = require('./mongoose'),
  Schema = mongoose.Schema;

var schema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  message: {
    type: String,
    required: true
  },
});

schema.statics.registration = function(username, password, callback) {
  var User = this;
  var user = new User({username: username, message: password});
  user.save();
};
exports.User = mongoose.model('ReportMessage', schema);




