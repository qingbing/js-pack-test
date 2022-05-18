// 定义菜单
const items = [
  {
    route: "/form",
    icon: "el-icon-menu",
    label: "表单组件",
    linkRoutes: {},
    subItems: [
      {
        route: "/form/source",
        icon: "el-icon-menu",
        label: "源码项",
        linkRoutes: {}
      },
      {
        route: "/form/common",
        icon: "el-icon-menu",
        label: "基础表单",
        linkRoutes: {}
      },
      {
        route: "/form/feature",
        icon: "el-icon-menu",
        label: "功能表单",
        linkRoutes: {}
      },
      {
        route: "/form/create",
        icon: "el-icon-menu",
        label: "表单项",
        linkRoutes: {}
      },
      {
        route: "/form/index",
        icon: "el-icon-menu",
        label: "表单显示",
        linkRoutes: {}
      }
    ]
  },
  {
    route: "/json-editor",
    icon: "el-icon-menu",
    label: "json 编辑器",
    linkRoutes: {},
    subItems: [
      {
        route: "/json-editor/index",
        icon: "el-icon-menu",
        label: "Vue-Json-Editor",
        linkRoutes: {}
      },
      {
        route: "/json-editor/form",
        icon: "el-icon-menu",
        label: "Json封装输入",
        linkRoutes: {}
      },
      {
        route: "/json-editor/view",
        icon: "el-icon-menu",
        label: "Json封装显示",
        linkRoutes: {}
      }
    ]
  },
  {
    route: "/vue-editor",
    icon: "el-icon-menu",
    label: "Vue 编辑器",
    linkRoutes: {},
    subItems: [
      {
        route: "/vue-editor/index",
        icon: "el-icon-menu",
        label: "Vue-Editor",
        linkRoutes: {}
      },
      {
        route: "/vue-editor/form",
        icon: "el-icon-menu",
        label: "Vue-Editor封装输入",
        linkRoutes: {}
      },
      {
        route: "/vue-editor/view",
        icon: "el-icon-menu",
        label: "Vue-Editor封装显示",
        linkRoutes: {}
      },
    ]
  },
  {
    route: "/md-editor",
    icon: "el-icon-menu",
    label: "Markdown 编辑器",
    linkRoutes: {},
    subItems: [
      {
        route: "/md-editor/index",
        icon: "el-icon-menu",
        label: "markdown使用说明",
        linkRoutes: {}
      },
      {
        route: "/md-editor/create",
        icon: "el-icon-menu",
        label: "Markdown编辑器",
        linkRoutes: {}
      },
      {
        route: "/md-editor/view",
        icon: "el-icon-menu",
        label: "Markdown格式化",
        linkRoutes: {}
      }
    ]
  },
  {
    route: "/table",
    icon: "el-icon-menu",
    label: "Table 组件",
    linkRoutes: {},
    subItems: [
      {
        route: "/table/base",
        icon: "el-icon-menu",
        label: "基本Table",
        linkRoutes: {}
      },
      {
        route: "/table/base-remote",
        icon: "el-icon-menu",
        label: "动态Table",
        linkRoutes: {}
      },
      {
        route: "/table/pagination",
        icon: "el-icon-menu",
        label: "分页Table",
        linkRoutes: {}
      },
      {
        route: "/table/pagination-remote",
        icon: "el-icon-menu",
        label: "动态分页",
        linkRoutes: {}
      },
      {
        route: "/table/edit-base",
        icon: "el-icon-menu",
        label: "编辑Table",
        linkRoutes: {}
      },
      {
        route: "/table/edit-ctrl",
        icon: "el-icon-menu",
        label: "可控编辑Table",
        linkRoutes: {}
      },
      {
        route: "/table/edit-remote",
        icon: "el-icon-menu",
        label: "远程编辑Table",
        linkRoutes: {}
      }
    ]
  },
  {
    route: "/other",
    icon: "el-icon-menu",
    label: "其它组件",
    linkRoutes: {},
    subItems: [
      {
        route: "/other/high-light",
        icon: "el-icon-menu",
        label: "代码高亮",
        linkRoutes: {}
      },
      {
        route: "/other/cell-edit",
        icon: "el-icon-menu",
        label: "单元格编辑",
        linkRoutes: {}
      }
    ]
  }
];

export default items;
