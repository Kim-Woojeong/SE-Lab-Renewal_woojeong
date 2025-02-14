const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:3001/'
    })
  );
  app.use(
    proxy('/assets', {
      target: 'http://localhost:3001/'
    })
  );
};