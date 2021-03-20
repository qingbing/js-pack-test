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
    path: "/json-editor",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "index"
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
  },
  {
    path: "/quill-editor",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "index"
      },
      {
        path: "index",
        component: () => import("../views/quill-editor/index.vue"),
        meta: {
          title: "Vue-Quill-Editor"
        }
      },
      {
        path: "form",
        component: () => import("../views/quill-editor/form.vue"),
        meta: {
          title: "Form填写"
        }
      },
      {
        path: "view",
        component: () => import("../views/quill-editor/view.vue"),
        meta: {
          title: "Form显示"
        }
      },
    ]
  },
  {
    path: "/md-editor",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "index"
      },
      {
        path: "index",
        component: () => import("../views/md-editor/index.vue"),
        meta: {
          title: "Vue-Markdown-Editor 使用方法"
        }
      },
      {
        path: "create",
        component: () => import("../views/md-editor/create.vue"),
        meta: {
          title: "编辑器填写"
        }
      },
      {
        path: "view",
        component: () => import("../views/md-editor/view.vue"),
        meta: {
          title: "Markdown格式化显示"
        }
      },
    ]
  },
  {
    path: "/table",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "index"
      },
      {
        path: "index",
        redirect: "base"
      },
      {
        path: "base",
        component: () => import("../views/table/base.vue"),
        meta: {
          title: "基本Table"
        }
      },
      {
        path: "base-remote",
        component: () => import("../views/table/base-remote.vue"),
        meta: {
          title: "动态Table"
        }
      },
      {
        path: "pagination",
        component: () => import("../views/table/pagination.vue"),
        meta: {
          title: "分页Table"
        }
      },
      {
        path: "pagination-remote",
        component: () => import("../views/table/pagination-remote.vue"),
        meta: {
          title: "编辑Table"
        }
      },
      {
        path: "edit-base",
        component: () => import("../views/table/edit-base.vue"),
        meta: {
          title: "动态分页"
        }
      },
      {
        path: "edit-base-remote",
        component: () => import("../views/table/edit-base-remote.vue"),
        meta: {
          title: "远程编辑Table"
        }
      },
      {
        path: "edit-pagination",
        component: () => import("../views/table/edit-pagination.vue"),
        meta: {
          title: "分页编辑Table"
        }
      },
      {
        path: "edit-pagination-remote",
        component: () => import("../views/table/edit-pagination-remote.vue"),
        meta: {
          title: "远程分页编辑"
        }
      },
    ]
  },
  {
    path: "/other",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "high-light"
      },
      {
        path: "index",
        redirect: "high-light"
      },
      {
        path: "high-light",
        component: () => import("../views/other/high-light.vue"),
        meta: {
          title: "Vue-Code-High-Light"
        }
      },
      {
        path: "cell-edit",
        component: () => import("../views/other/cell-edit.vue"),
        meta: {
          title: "Cell edit"
        }
      },
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
