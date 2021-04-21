// 导入需要函数
import { col_cloumn } from "@qingbing/helper";
// 导出
export default function () {
  const items = {
    text_field: {
      input_type: "view-text",
      field: "text_field",
      default: "text 的默认值",
      label: "Text标签"
    },
    text: {
      input_type: "input-text",
      field: "text",
      // default: "11",
      label: "普通输入",
      exts: {
        // showPassword: true, // 密码输入
        // placeholder: "请输入xxx", // 空提醒
        prefixIcon: "el-icon-date", // 首部图标
        suffixIcon: "el-icon-search", // 尾部图标
        clearable: true, // 可清空
        maxlength: 10, // 最大输入长度
        minlength: 5, // 最小输入长度
        showWordLimit: true // 显示字数统计，需要设置最大长度
      },
      rules: [{ type: "required" }]
    },
    text1: {
      input_type: "input-text",
      field: "text1",
      label: "枚举",
      rules: [{ type: "required" }, { type: "enum", enum: ["nan", "nv"] }]
    },
    email: {
      input_type: "input-text",
      field: "email",
      label: "邮箱",
      rules: [
        { type: "required" },
        { type: "email" },
        {
          type: "callback",
          fields: ["select2"],
          params: { id: 55 },
          callback(data, formData) {
            // callback 如果判断有问题，直接返回错误信息，正常不做返回
            console.log("callback", data, formData);
            return "Error. There is something wrong!";
          }
        },
        {
          type: "ajax",
          url: "/rule-ajax",
          fields: ["select2"],
          params: { id: 55 },
          method: "get"
        }
      ]
    },
    url: {
      input_type: "input-text",
      field: "url",
      label: "URL",
      rules: [{ type: "required" }, { type: "url" }]
    },
    regexp: {
      input_type: "input-text",
      field: "regexp",
      label: "Regexp",
      rules: [{ type: "required" }, { type: "regexp" }]
    },
    hex: {
      input_type: "input-text",
      field: "hex",
      label: "Hex十六进制",
      rules: [{ type: "required" }, { type: "hex" }]
    },
    pattern: {
      input_type: "input-text",
      field: "pattern",
      label: "Pattern",
      rules: [{ type: "required" }, { type: "pattern", pattern: "/^\\d{2}$/" }]
    },
    username: {
      input_type: "input-text",
      field: "username",
      label: "用户名",
      rules: [{ type: "required" }, { type: "username" }]
    },
    "password-text": {
      input_type: "input-text",
      field: "password-text",
      label: "Password",
      rules: [{ type: "required" }, { type: "password" }]
    },
    "compare-text": {
      input_type: "input-text",
      field: "compare-text",
      label: "Compare",
      rules: [
        { type: "required" },
        {
          type: "compare",
          compareField: "password-text",
          message: "密码确认不正确"
        }
      ]
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
      label: "座机或手机联系方式",
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
    string1: {
      input_type: "input-text",
      field: "string1",
      label: "String1",
      rules: [{ type: "required" }, { type: "string", min: 2 }]
    },
    string2: {
      input_type: "input-text",
      field: "string2",
      label: "String2",
      rules: [{ type: "required" }, { type: "string", max: 4 }]
    },
    string3: {
      input_type: "input-text",
      field: "string3",
      label: "String3",
      rules: [{ type: "required" }, { type: "string", min: 2, max: 4 }]
    },
    number11: {
      input_type: "input-text",
      field: "number11",
      label: "number11",
      rules: [{ type: "required" }, { type: "number", min: 20 }]
    },
    number12: {
      input_type: "input-text",
      field: "number12",
      label: "number12",
      rules: [{ type: "required" }, { type: "number", max: 40 }]
    },
    number13: {
      input_type: "input-text",
      field: "number13",
      label: "number13",
      rules: [{ type: "required" }, { type: "number", min: 20, max: 40 }]
    },
    integer11: {
      input_type: "input-text",
      field: "integer11",
      label: "integer11",
      rules: [{ type: "required" }, { type: "integer", min: 20 }]
    },
    integer12: {
      input_type: "input-text",
      field: "integer12",
      label: "integer12",
      rules: [{ type: "required" }, { type: "integer", max: 40 }]
    },
    integer13: {
      input_type: "input-text",
      field: "integer13",
      label: "integer13",
      rules: [{ type: "required" }, { type: "integer", min: 20, max: 40 }]
    },
    float11: {
      input_type: "input-text",
      field: "float11",
      label: "float11",
      rules: [{ type: "required" }, { type: "float", min: 20 }]
    },
    float12: {
      input_type: "input-text",
      field: "float12",
      label: "float12",
      rules: [{ type: "required" }, { type: "float", max: 40 }]
    },
    float13: {
      input_type: "input-text",
      field: "float13",
      label: "float13",
      rules: [{ type: "required" }, { type: "float", min: 20, max: 40 }]
    },
    password: {
      input_type: "input-password",
      field: "password",
      label: "密码",
      exts: {
        showPassword: true
        // placeholder: "请输入xxx",
      },
      rules: [{ type: "required" }]
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
        showWordLimit: true, // 显示字数统计，需要设置最大长度
      },
      rules: [{ type: "required" }]
    },
    number1: {
      input_type: "input-number",
      field: "number1",
      default: "11",
      label: "严格数字",
      exts: {
        min: 2,
        max: 20,
        step: 0.5, // 步阶
        precision: 2, // 小数精度
        stepStrictly: true // 严格倍数
      },
      rules: [{ type: "required" }, { type: "number" }]
    },
    number2: {
      input_type: "input-number",
      field: "number2",
      default: "11",
      label: "数字",
      exts: {},
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
    checkbox1: {
      input_type: "input-checkbox",
      field: "checkbox1",
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
      rules: [{ type: "required" }, { type: "array" }]
    },
    checkbox11: {
      input_type: "input-checkbox",
      field: "checkbox11",
      // default: ["apple", "banana"],
      label: "多选11",
      exts: {
        options: {
          apple: "苹果",
          pear: "梨子",
          banana: "香蕉",
          orange: "橙子"
        }
      },
      rules: [{ type: "required" }, { type: "array", min: 1, max: 3 }]
    },
    select1: {
      input_type: "input-select",
      field: "select1",
      default: "apple",
      label: "选项1",
      exts: {
        // placeholder: "请选择xxx", // 空提醒
        clearable: true, // 可清空
        // multiple: true,// 可多选
        // filterable: false,
        options: {
          apple: "苹果",
          pear: "梨子",
          banana: "香蕉"
        },
        min: 1,
        max: 2
      },
      rules: [{ type: "required" }, { type: "enum" }]
    },
    select2: {
      input_type: "input-select",
      field: "select2",
      default: ["apple", "banana"],
      label: "选项2",
      exts: {
        placeholder: "请选择xxx",
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
      rules: [{ type: "required" }]
    },
    select3: {
      input_type: "input-select",
      field: "select3",
      default: "apple",
      label: "远程搜索",
      exts: {
        // placeholder: "请选择xxx", // 空提醒
        clearable: true, // 可清空
        // multiple: true,// 可多选
        // filterable: false,
        options: {
          apple: "苹果"
        },
        // callback: (queryString) => {
        //   return {
        //     [`apple${queryString}`]: `苹果${queryString}`,
        //     [`pear${queryString}`]: `梨子${queryString}`,
        //     [`banana${queryString}`]: `香蕉${queryString}`,
        //   };
        // },

        beforeFetch: (data, formData) => {
          // console.log('beforeFetch', data, formData);
          // data.before = "before";
        },
        fetchMethod: "get",
        fetchData: {
          type: "sex"
        },
        fetchUrl: "/auto-complete",

        min: 1,
        max: 2
      },
      rules: [{ type: "required" }]
    },
    switch1: {
      input_type: "ele-switch",
      field: "switch1",
      default: 0,
      label: "开关1",
      rules: [{ type: "required" }, { type: "boolean" }]
    },
    switch2: {
      input_type: "ele-switch",
      field: "switch2",
      default: "apple",
      label: "开关2",
      exts: {
        options: ["apple", "pear"]
      },
      rules: [{ type: "required" }]
    },
    switch3: {
      input_type: "ele-switch",
      field: "switch3",
      default: 0,
      label: "开关3",
      exts: {
        options: {
          active: {
            label: "苹果",
            value: "apple"
          },
          inactive: {
            label: "梨子",
            value: "pear"
          }
        }
      },
      rules: [{ type: "required" }]
    },
    cascader: {
      input_type: "ele-cascader",
      field: "cascader",
      default: ["hebie", "langfang", "lang2"],
      label: "级联",
      exts: {
        clearable: true, // 可清空
        // showAllLevels: false,// 是否显示全部级别
        // checkStrictly: true,// 可选任意级别
        // filterable: false,
        options: [
          {
            value: "hebie",
            label: "河北省",
            children: [
              {
                value: "langfang",
                label: "廊坊市",
                children: [
                  {
                    value: "lang1",
                    label: "廊坊1",
                    children: [
                      {
                        value: "lang11",
                        label: "廊坊11"
                      },
                      {
                        value: "lang12",
                        label: "廊坊12"
                      }
                    ]
                  },
                  {
                    value: "lang2",
                    label: "廊坊"
                  }
                ]
              },
              {
                value: "shijiazhuagn",
                label: "石家庄",
                children: [
                  {
                    value: "shi1",
                    label: "石家庄1"
                  }
                ]
              }
            ]
          },
          {
            value: "guangdong",
            label: "广东省"
          },
          {
            value: "sichuan",
            label: "四川省",
            children: [
              {
                value: "shi1",
                label: "广安市"
              },
              {
                value: "shi1",
                label: "成都市",
                children: [
                  {
                    value: "gaoxin",
                    label: "高新区"
                  },
                  {
                    value: "wuhou",
                    label: "武侯区"
                  }
                ]
              }
            ]
          }
        ]
      },
      rules: [{ type: "required" }]
    },
    slider1: {
      input_type: "ele-slider",
      field: "slider1",
      default: 12,
      label: "滑块",
      exts: {
        step: 5, // 步长
        // range: true, // 是否范围
        showStops: true, // 显示离散点
        // showInput:true, // 显示输入框
        min: 10, // 最小值
        max: 36, // 最大值
        marks: {
          11: "11C",
          20: "20C",
          15: "15C",
          30: "30C"
        }
      },
      rules: [{ type: "required" }]
    },
    slider2: {
      input_type: "ele-slider",
      field: "slider2",
      // default: [12, 24],
      label: "滑块",
      exts: {
        step: 2,
        range: true,
        showStops: true,
        min: 10,
        max: 36
      },
      rules: [{ type: "required" }]
    },
    rate: {
      input_type: "ele-rate",
      field: "rate",
      default: 3.3,
      label: "评分",
      exts: {
        max: 10, // 最大值
        allowHalf: true, // 是否允许半选
        lowThreshold: 3, // 低分和中等分数的界限值，值本身被划分在低分中
        highThreshold: 8, // 高分和中等分数的界限值，值本身被划分在高分中
        showText: true, // 是否显示辅助文字
        texts: ["极差", "失望", "一般", "满意", "惊喜"]
      },
      rules: [{ type: "required" }]
    },
    color: {
      input_type: "ele-color",
      field: "color",
      default: "#ff8c00",
      label: "颜色",
      exts: {
        // predefineColors: [ // 预定义颜色
        //   '#ff4500',
        //   '#ff8c00',
        //   '#ffd700',
        //   '#90ee90',
        //   '#00ced1',
        //   '#1e90ff',
        //   '#c71585',
        // ]
      },
      rules: [{ type: "required" }]
    },
    timePicker1: {
      input_type: "time-picker",
      field: "timePicker2",
      default: "16:00:00",
      label: "时间1",
      exts: {
        // timer-picker
        // placeholder: "", // 提示信息
        selectableRange: "12:00:00 - 19:00:00", // 范围内任意时间
        valueFormat: "HH:mm" // picker 时值的格式化
      },
      rules: [{ type: "required" }]
    },
    timePicker2: {
      input_type: "time-picker",
      field: "timePicker3",
      default: ["16:00", "17:00"],
      label: "时间范围",
      exts: {
        isRange: true,
        // placeholder: "", // 提示信息
        selectableRange: "12:00:00 - 19:00:00", // 范围内任意时间
        valueFormat: "HH:mm" // picker 时值的格式化
        // startPlaceholder: "", // 开始时间提示
        // endPlaceholder: "", // 结束时间提示
        // rangeSeparator: "至", // 连接文字
      },
      rules: [{ type: "required" }]
    },
    date1: {
      input_type: "datetime-picker",
      field: "date1",
      default: "2019-12-13 09:09:07",
      label: "Date",
      exts: {
        type: "date", // 组件类型： year, month, date, week, datetime
      },
      rules: [
        { type: "required" },
      ]
    },
    datetimePicker1: {
      input_type: "datetime-picker",
      field: "datetimePicker1",
      // default: "2000-03-02 13:00:03",
      label: "日期1",
      exts: {
        type: "datetime", // 组件类型： year, month, date, week, datetime
        timeSource: "future" // future ： 未来时间， past : 过去时间
        // valueFormat: "yyyy-MM-dd HH:mm:ss", // 返回值格式
        // format: "yyyy,MM,dd HH:mm:ss", // 组件框显示的格式
        // shortcuts: [{ // 快捷选项
        //   text: '今天',
        //   onClick(picker) {
        //     picker.$emit('pick', new Date());
        //   }
        // }, {
        //   text: '昨天',
        //   onClick(picker) {
        //     const date = new Date();
        //     date.setTime(date.getTime() - 3600 * 1000 * 24);
        //     picker.$emit('pick', date);
        //   }
        // }],
      },
      rules: [{ type: "required" }]
    },
    datetimePicker2: {
      input_type: "datetime-picker",
      field: "datetimePicker2",
      default: ["2021-01-19 00:00:00", "2021-02-25 00:00:00"],
      label: "日期2",
      exts: {
        type: "datetimerange", // 组件类型： monthrange, daterange, datetimerange
        timeSource: "past" // future ： 未来时间， past : 过去时间
        // valueFormat: "yyyy-MM-dd", // 返回值格式
        // format: "yyyy,MM,dd", // 组件框显示的格式
        // rangeSeparator, // 连接符号
        // startPlaceholder, // 开始时间提示
        // endPlaceholder, // 结束时间提示

        // shortcuts: [{ // 快捷选项
        //   text: '今天',
        //   onClick(picker) {
        //     picker.$emit('pick', new Date());
        //   }
        // }, {
        //   text: '昨天',
        //   onClick(picker) {
        //     const date = new Date();
        //     date.setTime(date.getTime() - 3600 * 1000 * 24);
        //     picker.$emit('pick', date);
        //   }
        // }],
      },
      rules: [{ type: "required" }]
    },
    uploader: {
      input_type: "ele-uploader",
      field: "uploader",
      default:
        "blob:http://localhost:8003/9b816395-77aa-4294-9bf4-7f8f25b631d7",
      label: "图片",
      exts: {
        action: "https://jsonplaceholder.typicode.com/posts/", //上传URL，必填
        // 上传前检查
        beforeUpload: function (file, uploader) {
          console.log(file);
          uploader.data.token = "11111";
          const isJPG = file.type === "image/jpeg";
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isJPG) {
            this.$message.error("上传头像图片只能是 JPG 格式!");
          }
          if (!isLt2M) {
            this.$message.error("上传头像图片大小不能超过 2MB!");
          }
          return isJPG && isLt2M;
        },
        // 上传成功后处理
        // succCallback(res, file, uploader) {
        //   console.log(res)
        //   console.log(file)

        //   return true;
        // },
        uplaodName: "file", // 上传的文件字段名
        autoUpload: true, // 是否在选取文件后立即进行上传
        headers: {}, // 文件头
        data: {}, // 上传时附带的参数
        withCredentials: true, // 支持发送 cookie 凭证信息
        accept: "image/png, image/jpeg" // 接受上传的文件类型
      },
      rules: [{ type: "required" }]
    },
    autocomplete: {
      input_type: "auto-complete",
      field: "autocomplete",
      // default: "11",
      label: "建议输入",
      exts: {
        placeholder: "请输入xxx", // 空提醒
        prefixIcon: "el-icon-date", // 首部图标
        suffixIcon: "el-icon-search", // 尾部图标
        clearable: true, // 可清空
        // callback: (queryString, cb) => {
        //   cb([
        //     { value: "xxx1" },
        //     { value: "xxx2" },
        //     { value: "xxx3" },
        //   ]);
        // },
        beforeFetch: (data, formData) => {
          // console.log('beforeFetch', data, formData);
          // data.before = "before";
        },
        fetchMethod: "get",
        fetchData: {
          type: "sex"
        },
        fetchUrl: "/remote-suggest"
      },
      rules: [{ type: "required" }]
    }
  };

  let formData = col_cloumn(items, "default", "field");
  let textFields = [];
  let viewFields = [
    "text_field",
    "text",
    "text1",
    "email",
    "url",
    "regexp",
    "hex",
    "pattern",
    "username",
    "password-text",
    "compare-text",
    "zipcode",
    "mobile",
    "phone",
    "contact",
    "fax",
    "ipv4",
    "string1",
    "string2",
    "string3",
    "number11",
    "number12",
    "number13",
    "integer11",
    "integer12",
    "integer13",
    "float11",
    "float12",
    "float13",
    "password",
    "textarea",
    "number1",
    "number2",
    "radio",
    "checkbox1",
    "checkbox11",
    "select1",
    "select2",
    "select3",
    "switch1",
    "switch2",
    "switch3",
    "cascader",
    "slider1",
    "slider2",
    "rate",
    "color",
    "timePicker1",
    "timePicker2",
    "timePicker3",
    "date1",
    "datetimePicker1",
    "datetimePicker2",
    "uploader",
    "autocomplete"
  ];
  return {
    items,
    formData,
    textFields,
    viewFields
  };
}
