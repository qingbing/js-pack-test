// 定义菜单
const items = [
  {
    "route": "/form",
    "icon": "el-icon-menu",
    "label": "表单组件",
    "linkRoutes": {},
    "subItems": [
      {
        "route": "/form/create",
        "icon": "el-icon-menu",
        "label": "表单项",
        "linkRoutes": {}
      },
      {
        "route": "/form/index",
        "icon": "el-icon-menu",
        "label": "表单显示",
        "linkRoutes": {}
      }
    ]
  },
  {
    "route": "/editor",
    "icon": "el-icon-menu",
    "label": "在线编辑器",
    "linkRoutes": {},
    "subItems": [
      {
        "route": "/editor/index",
        "icon": "el-icon-menu",
        "label": "Vue-Json-Editor",
        "linkRoutes": {}
      },
      {
        "route": "/editor/form",
        "icon": "el-icon-menu",
        "label": "Json封装输入",
        "linkRoutes": {}
      },
      {
        "route": "/editor/view",
        "icon": "el-icon-menu",
        "label": "Json封装显示",
        "linkRoutes": {}
      },
    ]
  },
];

export default items;