// 导入
import Vue from "vue";
import VueRouter from "vue-router";

// 组件导入
import Layout from "../views/layouts/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "index"
      },
      {
        path: "index",
        component: () => import("../views/Home.vue"),
        meta: {
          title: "首页"
        }
      },
    ],
  },
  {
    path: "/form",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "index"
      },
      {
        path: "index",
        component: () => import("../views/form/view.vue"),
        meta: {
          title: "表单项显示"
        }
      },
      {
        path: "create",
        component: () => import("../views/form/create.vue"),
        meta: {
          title: "表单项填写"
        }
      }
    ]
  },
  {
    path: "/editor",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "json"
      },
      {
        path: "index",
        component: () => import("../views/json-editor/index.vue"),
        meta: {
          title: "Vue-Json-Editor"
        }
      },
      {
        path: "form",
        component: () => import("../views/json-editor/form.vue"),
        meta: {
          title: "Form填写"
        }
      },
      {
        path: "view",
        component: () => import("../views/json-editor/view.vue"),
        meta: {
          title: "Form显示"
        }
      },
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
