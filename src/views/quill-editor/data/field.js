// 导入需要函数
import { col_cloumn } from "@qingbing/helper";
// 导出
export default function () {
  const items = [
    {
      input_type: "view-text",
      field: "username",
      default: "qingbing",
      label: "Username",
    },
    {
      input_type: "input-text",
      field: "email",
      default: "11@qq.c",
      label: "Email",
      exts: {},
      rules: [
        { type: "required" },
        { type: "email" },
      ]
    },
    {
      input_type: "json-editor",
      field: "remark",
      default: {
        test: 11
      },
      label: "备注信息",
      exts: {

      },
      rules: [
        { type: "required" }
      ]
    }
  ];

  let formData = col_cloumn(items, "default", "field");
  let textFields = [];
  let viewFields = [
    "username",
    "email",
    "remark"
  ];
  return {
    items,
    formData,
    textFields,
    viewFields,
  };
};
