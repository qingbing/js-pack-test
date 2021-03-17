// 引入包
import { isString, isFunction } from "@qingbing/helper";
import request from "./request";

/**
 * 导出 ajax 方法
 * @param {String} url 请求的URL
 * @param {Object} params 请求参数
 * @param {String} method 请求方法
 * @param {*} callback 回调函数
 */
export async function ajaxMethod(url, params, method, callback) {
  const req = { url };
  if (isString(method) && "get" == method.toLowerCase()) {
    req.method = 'get';
    req.params = params;
  } else {
    req.method = 'post';
    req.data = params;
  }
  if (isFunction(callback)) {
    return request(req).then(res => {
      callback(res.res);
    }).catch(err => err);
  }
  return (await request(req)).res;
}
