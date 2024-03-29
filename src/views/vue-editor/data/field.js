// 导入需要函数
import { col_cloumn } from "@qingbing/helper";
// 导出
export default function() {
  const items = [
    {
      input_type: "view-text",
      field: "username",
      default: "qingbing",
      label: "Username"
    },
    {
      input_type: "input-text",
      field: "email",
      default: "11@qq.c",
      label: "Email",
      exts: {},
      rules: [{ type: "required" }, { type: "email" }]
    },
    {
      input_type: "vue-editor",
      field: "remark",
      default:
        '<p>default demo</p><pre><code>&lt;?php\necho "123";\n</code></pre><p><img src="data:image/png;base64,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"></p>',
      label: "具体信息",
      exts: {
        id: "test_vue_editor", // id, 默认 @qingbing/helper.uniqid()
        // toolbarMode: "code",
        useSource: true,
        useImageHandle: true,
        imgAdded: (file, Editor, cursorLocation, resetUploader) => {
          console.log("file", file);
          console.log("Editor", Editor);
          console.log("cursorLocation", cursorLocation);
          console.log("resetUploader", resetUploader);
          /*
          // 上传图片操作(上传至七牛)
          let formData = new FormData();
          let type = file.name.split(".");
          if (type.length < 2) {
            return false;
          }
          type = type.pop();
          //获取七牛验证token
          this.getToken(type).then((res) => {
            formData.append("file", file);
            formData.append("key", res.key);
            formData.append("token", res.token);
            this.$http({
              method: "post",
              data: formData,
              headers: {
                "Content-Type": "multipart/form-data",
              },
              url: this.uploaderUrl,
            })
              .then((result) => {
                let url = this.imgDomain + result.data.key; // 获取URL
                if (
                  type.indexOf("png") > -1 ||
                  type.indexOf("jpg") > -1 ||
                  type.indexOf("jpeg") > -1
                ) {
                  Editor.insertEmbed(cursorLocation, "image", url); //图片
                } else {
                  Editor.insertEmbed(cursorLocation, "video", url); //视频
                }
                resetUploader();
              })
              .catch((erro) => {
                console.log(erro);
              });
          });
          */
          //把获取到的图片url 插入到鼠标所在位置 回显图片
          let url = "https://www.baidu.com/img/flexible/logo/pc/result@2.png";
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        }
      },
      rules: [{ type: "required" }]
    }
  ];

  const itemObjs = {};
  const textFields = [];
  const viewFields = [];
  const formData = {};
  for (const key in items) {
    if (Object.hasOwnProperty.call(items, key)) {
      const item = items[key];
      itemObjs[item.field] = item;
      textFields.push(item.field);
      viewFields.push(item.field);
      formData[item.field] = item.default ? item.default : "";
    }
  }
  return {
    items: itemObjs,
    formData,
    textFields,
    viewFields
  };
}
