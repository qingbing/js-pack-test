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
  const reqParams = { url };
  if (isString(method) && "get" == method.toLowerCase()) {
    reqParams.method = 'get';
    reqParams.params = params;
  } else {
    reqParams.method = 'post';
    reqParams.data = params;
  }
  if (isFunction(callback)) {
    return request(reqParams).then(res => {
      callback(res.data);
    }).catch(err => err);
  }
  return (await request(reqParams)).data;
}
