/**
 *  将token保存到cookie中
 */

import cookie from 'js-cookie';

const tokenKey = 'Admin-token';

// 获取token
export function getToken() {
  return cookie.get(tokenKey);
}

// 设置token
export function setToken(token) {
  return cookie.set(tokenKey, token);
}

// 移除token
export function removeToken() {
  return cookie.remove(tokenKey);
}
