import * as api from '../config/api';

// export const getVerify = res => api.get('manage/login/getverifycode', res);
/**
 * 登录
 */
export const userLogin = res => api.post('manage/login/do', res);
