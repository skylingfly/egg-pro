'use strict';
class AppBootHook {

  constructor(app) {
    this.app = app;
    app.root_path = __dirname;
  }

  configWillLoad() {
    // 即将加载
  }

  async didLoad() {
    // 请将你的插件项目中 app.beforeStart 中的代码置于此处。
  }

  async willReady() {
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用
  }

  async didReady() {
    // 应用已经启动完毕
    console.log('=========init data==========');
    const ctx = await this.app.createAnonymousContext();
    await ctx.model.User.remove();
    await ctx.service.user.create({
      mobile: '13546098234',
      password: '24324',
      realName: 'sky',
    });
  }

  async serverDidReady() {
    // http / https server 已启动，开始接受外部请求
    // 此时可以从 app.server 拿到 server 的实例

  }

  async beforeClose() {
    // 请将您的 app.beforeClose 中的代码置于此处。
  }
}

module.exports = AppBootHook;
