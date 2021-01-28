// 导入axios请求模块
import request from "@/utils/request";

/**
 * 获取显示标签
 * @param {Object} params
 */
export function getLabels(params) {
  return request({
    url: "/labels",
    method: "get",
    params: params
  });
}
