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
    "route": "/json-editor",
    "icon": "el-icon-menu",
    "label": "json 编辑器",
    "linkRoutes": {},
    "subItems": [
      {
        "route": "/json-editor/index",
        "icon": "el-icon-menu",
        "label": "Vue-Json-Editor",
        "linkRoutes": {}
      },
      {
        "route": "/json-editor/form",
        "icon": "el-icon-menu",
        "label": "Json封装输入",
        "linkRoutes": {}
      },
      {
        "route": "/json-editor/view",
        "icon": "el-icon-menu",
        "label": "Json封装显示",
        "linkRoutes": {}
      },
    ]
  },
  {
    "route": "/quill-editor",
    "icon": "el-icon-menu",
    "label": "Quill 编辑器",
    "linkRoutes": {},
    "subItems": [
      {
        "route": "/quill-editor/index",
        "icon": "el-icon-menu",
        "label": "Vue-Quill-Editor",
        "linkRoutes": {}
      },
      {
        "route": "/quill-editor/form",
        "icon": "el-icon-menu",
        "label": "Quill封装输入",
        "linkRoutes": {}
      },
      {
        "route": "/quill-editor/view",
        "icon": "el-icon-menu",
        "label": "Quill封装显示",
        "linkRoutes": {}
      },
    ]
  },
  {
    "route": "/md-editor",
    "icon": "el-icon-menu",
    "label": "Markdown 编辑器",
    "linkRoutes": {},
    "subItems": [
      {
        "route": "/md-editor/index",
        "icon": "el-icon-menu",
        "label": "markdown使用说明",
        "linkRoutes": {}
      },
      {
        "route": "/md-editor/create",
        "icon": "el-icon-menu",
        "label": "Markdown编辑器",
        "linkRoutes": {}
      },
      {
        "route": "/md-editor/view",
        "icon": "el-icon-menu",
        "label": "Markdown格式化",
        "linkRoutes": {}
      },
    ]
  },
  {
    "route": "/other",
    "icon": "el-icon-menu",
    "label": "其它组件",
    "linkRoutes": {},
    "subItems": [
      {
        "route": "/other/high-light",
        "icon": "el-icon-menu",
        "label": "代码高亮",
        "linkRoutes": {}
      },
    ]
  },
];

export default items;