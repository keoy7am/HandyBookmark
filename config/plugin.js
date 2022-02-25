'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  // ejs: {
  //   enable: true,
  //   package: 'egg-view-ejs',
  // },
};
