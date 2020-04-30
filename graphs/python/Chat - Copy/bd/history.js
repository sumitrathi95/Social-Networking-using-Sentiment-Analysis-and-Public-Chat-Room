var mongoose = require('./mongoose'),
  Schema = mongoose.Schema;

var schema = new Schema({
  username: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  created: {
    type:Date,
    default: Date.now
  },
  functs: {
    type: String,
    required: true
  }
});

schema.statics.saveMessage = function(username, message, functs, callback) {
  var HistoryMessage = this;
  var historyMessage = new HistoryMessage({username: username, message: message, functs : Date(Date.now()).toLocaleString()});
  historyMessage.save();  
};

exports.HistoryMessage = mongoose.model('HistoryMessage', schema);


