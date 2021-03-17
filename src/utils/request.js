// 导入相应的函数和模块
import Axios from "axios";
import { Message } from "element-ui";

// 创建请求
const request = Axios.create({
  // baseURL: '/', // 默认就是 "/",
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 // 5000毫秒，5秒
});

// Axios 请求拦截
request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Message({ message: "请求失败", type: "error" });
    return Promise.reject(error);
  }
);
// Axios 响应拦截
request.interceptors.response.use(
  response => {
    const res = response.data;
    if (0 == res.code) {
      return res;
    }
    Message({ message: res.msg, type: "error" });
    return Promise.reject(res.msg);
  },
  error => {
    Message({ message: `响应失败: ${error}`, type: "error" });
    return Promise.reject(error);
  }
);

// 导出默认对象
export default request;
