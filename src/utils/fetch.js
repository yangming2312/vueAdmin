import axios from 'axios';
import store from '@/store';
import { Message } from 'element-ui';
import { getToken } from '@/utils/auth';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
});

// request拦截器
service.interceptors.request.use(config => {
  // 让每个请求携带token--['X-Token']为自定义key
  if (store.getter.token) {
    config.headers['X-Token'] = getToken();
  }
  return config;
}, error => {
  Promise.reject(error);
});

// response拦截器
service.interceptors.response.use(response => response,
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  });
export default service;
