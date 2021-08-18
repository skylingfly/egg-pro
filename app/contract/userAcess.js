'use strict';
module.exports = {
  loaginRequest: {
    mobile: {
      type: 'string',
      required: true,
      description: '手机号',
      example: '124324325',
      format: /^1[345678]\d{9}$/,
    },
    password: {
      type: 'string',
      required: true,
      description: '密码',
      example: '111233',
    },
  },
};
