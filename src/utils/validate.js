/**
 * 验证规则
 * */

export function isValidUsername(str) {
  const valid_map = ['admin', 'editor'];
  return valid_map.indexOf(str.trim()) >= 0;
}
