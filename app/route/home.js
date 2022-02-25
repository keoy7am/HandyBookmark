'use strict';
module.exports = app => {
  app.router.get('/', app.controller.home.index);
  app.router.get('/home', app.controller.home.index);
};
