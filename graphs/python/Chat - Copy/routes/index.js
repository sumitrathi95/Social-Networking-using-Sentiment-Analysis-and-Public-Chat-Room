var checkAuth = require('../middleware/checkAuth')
var redirectAuth = require('../middleware/redirectAuth')

module.exports = function(app) {
  app.post('/logout', require('./logout').post);

  app.get('/chat', checkAuth, require('./chat').get)

  app.get('/history', require('./history').get)
  app.post('/history', require('./history').post)

  app.get('/login', redirectAuth, require('./login').get);
  app.post('/login', require('./login').post);

  app.get('/reg', redirectAuth, require('./reg').get);
  app.post('/reg', require('./reg').post);
	
  app.get('/report', checkAuth, require('./report').get);
  app.post('/report', require('./report').post);

  app.get('/', redirectAuth, function(req, res) {
    res.render('login');
  });

  };
