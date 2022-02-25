'use strict';
const Service = require('egg').Service;

class BookmarkService extends Service {
  async findByUser(name) {
    const user = await this.ctx.model.Bookmark.find({ userName: name });
    return user;
  }
}

module.exports = BookmarkService;
