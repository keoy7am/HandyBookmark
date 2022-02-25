'use strict';
module.exports = app => {
  app.router.get('/user', app.controller.user.index);
  app.router.get('/user/:userName', app.controller.user.find);
  app.router.get('/user/test', app.controller.user.test);
};
