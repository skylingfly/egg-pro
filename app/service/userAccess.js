'use strict';
const { Service } = require('egg');

class UserAcessService extends Service {
  async login(payload) {
    const { ctx, service } = this;
    const user = await service.user.findByMobile(payload.mobile);
    if (!user) {
      ctx.throw(404, 'user not found');
    }
    const verifyPwd = await ctx.compare(payload.password, user.password);
    if (!verifyPwd) {
      ctx.throw(404, 'user password is error');
    }

    return { token: await service.actionToken.apply(user._id) };
  }

  async logout() {

  }

  async getCurrentUser() {
    const { ctx, service } = this;
    const _id = ctx.state.user.data._id;

    const user = await service.user.find(_id);
    if (!user) {
      ctx.throw(404, 'user not found');
    }
    user.password = 'xxxxx';
    return user;
  }
}

module.exports = UserAcessService;
