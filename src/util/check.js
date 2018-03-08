export default {
  phone (res) {
    /**
     * 验证手机号 正确时返回false  错误时返回错误提示
     * @return {string} 验证通过返回''   否则返回错误提示语
     */
    let pattern = /^1\d{10}$/;
    if (!res) {
      return '手机号不能为空';
    } else if (!pattern.test(res)) {
      return '手机号格式错误';
    } else {
      return '';
    }
  },
  /**
   * 验证码密码  正确时返回false 错误时返回错误提示
   * @return {string} 如果密码为空返回提示语  否则返回空
   */
  pwd (res) {
    if (!res) {
      return '密码不能为空';
    } else {
      return '';
    }
  },
  /**
   * 验证码2次密码是否一致
   * @return {string} 如果是一致返回'', 如何不一致返回提示语
   */
  pwd2 (res1, res2) {
    if (res1 !== res2) {
      return '2次密码不一致';
    } else {
      return '';
    }
  }
};
