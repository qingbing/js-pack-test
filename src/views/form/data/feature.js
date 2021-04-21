// 导入需要函数
import { col_cloumn } from "@qingbing/helper";
// 导出
export default function () {
  const items = {
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
    },
    strictNumber: {
      input_type: "input-number",
      field: "strictNumber",
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
    switch: {
      input_type: "ele-switch",
      field: "switch",
      default: 0,
      label: "开关",
      rules: [{ type: "required" }, { type: "boolean" }]
    },
    cascader: {
      input_type: "ele-cascader",
      field: "cascader",
      default: ["hebie", "langfang", "lang2"],
      label: "级联列表",
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
    slider: {
      input_type: "ele-slider",
      field: "slider",
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
    time: {
      input_type: "time-picker",
      field: "time",
      default: "16:00:00",
      label: "时间",
      exts: {
        isRange: false,
        // range
        rangeSeparator: "-",
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        // placeholder: "",
        arrowControl: false,
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        valueFormat: "HH:mm:ss",
        // pickerOptions
        format: "HH:mm:ss",
        selectableRange: "08:00:00 - 20:00:00"
      },
      rules: [{ type: "required" }]
    },
    timeRange: {
      input_type: "time-picker",
      field: "timeRange",
      default: ["16:00:00", "20:00:00"],
      label: "时间段",
      exts: {
        isRange: true,
        selectableRange: "08:00:00 - 20:00:00"
      },
      rules: [{ type: "required" }]
    },
    date: {
      input_type: "datetime-picker",
      field: "date",
      default: "2019-12-13",
      label: "日期",
      exts: {
        type: "date",
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        align: "left",
        prefixIcon: "el-icon-date",
        clearIcon: "el-icon-circle-close",
        validateEvent: true,
        // feature
        placeholder: "",
        // valueFormat: "",
        // format: "",
        // range
        rangeSeparator: "-",
        startPlaceholder: "",
        endPlaceholder: "",
        // pickerOptions
        shortcuts: [],
        timeSource: "", // past,future,none
        firstDayOfWeek: 7
      },
      rules: [{ type: "required" }]
    },
    daterange: {
      input_type: "datetime-picker",
      field: "daterange",
      default: ["2021-04-08", "2021-05-04"],
      label: "日期范围",
      exts: {
        type: "daterange"
      },
      rules: [{ type: "required" }]
    },
    month: {
      input_type: "datetime-picker",
      field: "month",
      default: "2021-07",
      label: "月",
      exts: {
        type: "month"
      },
      rules: [{ type: "required" }]
    },
    monthrange: {
      input_type: "datetime-picker",
      field: "monthrange",
      default: ["2021-07", "2022-05"],
      label: "月份范围",
      exts: {
        type: "monthrange"
      },
      rules: [{ type: "required" }]
    },
    year: {
      input_type: "datetime-picker",
      field: "year",
      default: "2022",
      label: "年",
      exts: {
        type: "year"
      },
      rules: [{ type: "required" }]
    },
    week: {
      input_type: "datetime-picker",
      field: "week",
      default: "2021-04-19",
      label: "周",
      exts: {
        type: "week"
      },
      rules: [{ type: "required" }]
    },
    datetime: {
      input_type: "datetime-picker",
      field: "datetime",
      default: "2021-04-15 00:00:00",
      label: "时间",
      exts: {
        type: "datetime"
      },
      rules: [{ type: "required" }]
    },
    datetimerange: {
      input_type: "datetime-picker",
      field: "datetimerange",
      default: ["2021-04-15 00:00:00", "2021-05-21 00:00:00"],
      label: "时间范围",
      exts: {
        type: "datetimerange"
      },
      rules: [{ type: "required" }]
    },
    dates: {
      input_type: "datetime-picker",
      field: "dates",
      default: ["2021-04-13", "2021-04-14", "2021-04-21"],
      label: "多日期选择",
      exts: {
        type: "dates"
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
        beforeUpload: function(file, uploader) {
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
