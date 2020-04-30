var User = require('../bd/user').User;
var HttpError = require('../error').HttpError;
var AuthError = require('../bd/user').AuthError;

exports.get = function(req, res) {
    res.render('reg');
};

exports.post = function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
  
    User.registration(username, password, function(err, user) {
      if (err) {
        // res.json({
        //     ok: false
        // });
        if (err instanceof AuthError) {
          return next(new HttpError(403, err.message));
        } else {
          return next(err);
        }
      }
  
      req.session.user = user._id;
    //   res.send({});
      res.json({
          ok: true
      });
    });
  
};