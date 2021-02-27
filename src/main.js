import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import request from "./utils/request";
import { isString } from "@qingbing/helper";

Vue.config.productionTip = false;

// 注意引入element-ui在Vue下，因为可能会被其他组件使用到
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, {
  size: "medium" // 设置element-ui的默认大小
  // locale: enLang // 如果使用中文，无需设置，请删除
});

import ElementForm from "@qingbing/element-form";
Vue.use(ElementForm, {
  async ajaxMethod(url, data, method) {
    const requestData = { url };
    if (isString(method) && "get" == method.toLowerCase()) {
      requestData.method = 'get';
      requestData.params = data;
    } else {
      requestData.method = 'post';
      requestData.data = data;
    }
    return (await request(requestData)).data;
    // const res = await request(requestData);
    // return res.data;
  }
});
// 代码高亮
import Highlight from "@qingbing/vue-highlight";
Vue.use(Highlight);

// markdown 在线编辑器
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(mavonEditor);

// Vue实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
