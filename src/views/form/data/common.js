// 导入需要函数
import { col_cloumn } from "@qingbing/helper";
// 导出
export default function() {
  const items = {
    text_field: {
      input_type: "view-text",
      field: "text_field",
      default: "text 的默认值",
      label: "Text标签"
    },
    id_card: {
      input_type: "input-text",
      field: "id_card",
      label: "身份证号",
      rules: [{ type: "required" }, { type: "idCard" }]
    },
    email: {
      input_type: "input-text",
      field: "email",
      label: "邮箱",
      rules: [{ type: "required" }, { type: "email" }]
    },
    url: {
      input_type: "input-text",
      field: "url",
      label: "URL",
      rules: [{ type: "required" }, { type: "url" }]
    },
    hex: {
      input_type: "input-text",
      field: "hex",
      label: "Hex十六进制",
      rules: [{ type: "required" }, { type: "hex" }]
    },
    username: {
      input_type: "input-text",
      field: "username",
      label: "用户名",
      rules: [{ type: "required" }, { type: "username" }]
    },
    zipcode: {
      input_type: "input-text",
      field: "zipcode",
      label: "邮编",
      rules: [{ type: "required" }, { type: "zipcode" }]
    },
    mobile: {
      input_type: "input-text",
      field: "mobile",
      label: "手机",
      rules: [{ type: "required" }, { type: "mobile" }]
    },
    phone: {
      input_type: "input-text",
      field: "phone",
      label: "座机",
      rules: [{ type: "required" }, { type: "phone" }]
    },
    contact: {
      input_type: "input-text",
      field: "contact",
      label: "联系方式",
      rules: [{ type: "required" }, { type: "contact" }]
    },
    fax: {
      input_type: "input-text",
      field: "fax",
      label: "传真",
      rules: [{ type: "required" }, { type: "fax" }]
    },
    ipv4: {
      input_type: "input-text",
      field: "ipv4",
      label: "Ip地址",
      rules: [{ type: "required" }, { type: "ipv4" }]
    },
    password: {
      input_type: "input-text",
      field: "password",
      label: "密码",
      exts: {
        showPassword: true
      },
      rules: [{ type: "required" }, { type: "password" }]
    },
    comparePassword: {
      input_type: "input-text",
      field: "comparePassword",
      label: "确认密码",
      rules: [
        { type: "required" },
        {
          type: "compare",
          compareField: "password",
          message: "密码确认不正确"
        }
      ]
    },
    string: {
      input_type: "input-text",
      field: "string",
      label: "字符串",
      rules: [{ type: "required" }, { type: "string", min: 2, max: 4 }]
    },
    number: {
      input_type: "input-text",
      field: "number",
      label: "数字",
      rules: [{ type: "required" }, { type: "number", min: 20, max: 40 }]
    },
    integer: {
      input_type: "input-text",
      field: "integer",
      label: "整数",
      rules: [{ type: "required" }, { type: "integer", min: 20, max: 40 }]
    },
    float: {
      input_type: "input-text",
      field: "float",
      label: "浮点数",
      rules: [{ type: "required" }, { type: "float", min: 20, max: 40 }]
    },
    textarea: {
      input_type: "input-area",
      field: "textarea",
      // default: "11",
      label: "textarea输入",
      exts: {
        autosize: true, // 高度自适应
        // placeholder: "请输入xxx", // 空提醒
        prefixIcon: "el-icon-date", // 首部图标
        suffixIcon: "el-icon-search", // 尾部图标
        clearable: true, // 可清空
        // maxlength: 10, // 最大输入长度
        // minlength: 5, // 最小输入长度
        showWordLimit: true // 显示字数统计，需要设置最大长度
      },
      rules: [{ type: "required" }]
    },
    radio: {
      input_type: "input-radio",
      field: "radio",
      default: "apple",
      label: "单选",
      exts: {
        options: {
          apple: "苹果",
          pear: "梨子"
        }
      },
      rules: [{ type: "required" }, { type: "enum" }]
    },
    checkbox: {
      input_type: "input-checkbox",
      field: "checkbox",
      default: ["apple", "banana"],
      label: "多选",
      exts: {
        options: {
          apple: "苹果",
          pear: "梨子",
          banana: "香蕉"
        },
        min: 1,
        max: 2
      },
      rules: [{ type: "required" }, { type: "array", min: 1, max: 3 }]
    },
    select: {
      input_type: "input-select",
      field: "select",
      default: ["apple", "banana"],
      label: "下拉列表",
      exts: {
        clearable: true,
        multiple: true,
        filterable: true,
        options: {
          apple: "苹果",
          pear: "梨子",
          banana: "香蕉"
        },
        min: 1,
        max: 2
      },
      rules: [{ type: "required" }, { type: "enum" }]
    }
  };

  let formData = col_cloumn(items, "default", "field");
  let textFields = [];
  let viewFields = Object.keys(items);

  return {
    items,
    formData,
    textFields,
    viewFields
  };
}
