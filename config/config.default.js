/* eslint valid-jsdoc: "off" */
'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1645311730200_1234';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'ejs',
      '.tpl': 'nunjucks',
      '.ejs': 'ejs',
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.static = {
    prefix: '/static', // prefix: '/public/'
    dir: path.join(appInfo.baseDir, 'app/public'), // `String` or `Array:[dir1, dir2, ...]`
    dynamic: true,
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
    // maxFiles: 1000, // default is 1000
  };

  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://ip:port/BookMark',
    options: {
      appName: appInfo.name,
      useUnifiedTopology: true,
      auth: { authSource: 'admin' },
      user: 'usr',
      pass: 'pwd',
    },
    plugins: [],
  };

  return {
    ...config,
    ...userConfig,
  };
};
