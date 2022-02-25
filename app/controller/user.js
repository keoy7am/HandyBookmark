'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const t = await ctx.model.User.find({});
    ctx.body = t;
  }

  // * Todo Tasks *
  async register() {
    const ctx = this.ctx;
    ctx.status = 201;
  }
  async login() {
    const ctx = this.ctx;
    ctx.status = 200;
  }
  async forgetPassword() {
    const ctx = this.ctx;
    ctx.status = 200;
  }

  // * test *
  async find() {
    const { ctx } = this;
    const userName = ctx.params.userName;
    const userInfo = await ctx.service.user.findByName(userName);
    ctx.body = userInfo;
  }
  async test() {
    const ctx = this.ctx;
    const newUser =
    {
      userName: 'Test',
      password: '!QAZ2wsx',
      is_enable: true,
    };
    await ctx.service.user.createUser(newUser, testCallback);
    ctx.status = 201;
    ctx.body = 'Accepcted, Add one!';
    // const userYap = await ctx.model.User.findOne();
    // ctx.body = userYap.password;
  }
}

function testCallback() {
  console.log('Success;');
}

module.exports = UserController;
