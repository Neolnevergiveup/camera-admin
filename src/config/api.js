import axios from 'axios';
import { Loading } from 'element-ui';
import { baseUrl } from './env';
let loading;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 待修改样式
  loading = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  loading.close();
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export const get = (url, params) => {
  return axios.get(`${baseUrl}${url}`, params)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
};

export const post = (url, params) => {
  return axios.post(`${baseUrl}${url}`, params)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
};
