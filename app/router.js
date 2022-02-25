'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./route/home')(app);
  require('./route/user')(app);
};
