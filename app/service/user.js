'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async findByName(name) {
    const user = await this.ctx.model.User.find({ userName: name });
    return user;
  }
  async createUser(userData, callback) {
    try {
      return await this.ctx.model.User.create(userData, callback);
    } catch (error) {
      return false;
    }
  }
}

module.exports = UserService;
