'use strict';
module.exports = (option, app) => {
  return async function(ctx, next) {
    try {
      await next();
    } catch (error) {
      app.emit('error', error, this);
      // 统一错误处理
      const status = error.status || 500;
      const errorMsg = status === 500 && app.config.env === 'prod' ?
        'internal Server Error' : error.message;
      ctx.body = {
        code: status,
        error: errorMsg,
      };

      if (status === 422) {
        ctx.body.detail = error.errors;
      }
      ctx.status = 200;
    }
  };
};
