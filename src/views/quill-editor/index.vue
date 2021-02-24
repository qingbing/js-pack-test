<template>
  <div>
    <vue-editor v-model="content1" :id="uniqueId()"></vue-editor>

    <vue-editor
      v-model="content2"
      :id="uniqueId()"
      useCustomImageHandler
      :editorToolbar="editorToolbar"
      @image-added="handleImageAdded"
    ></vue-editor>

    <vue-editor
      v-model="content3"
      :id="uniqueId()"
      useCustomImageHandler
      :editorToolbar="editorToolbar3"
      @image-added="handleImageAdded"
    ></vue-editor>

    <pre class="code">
1. 接受参数
- id : string
  - 默认"quill-container"，如果同一个页面有两个及以上编辑器，强烈建议手动设置
- v-model : string
  - 绑定的数据字段
- useCustomImageHandler : boolean
  - 默认 false，是否处理图片上传，为true时，需要指定 @image-added 用于处理图片上传，默认用 base64 编码图片
- editorToolbar : array
  - 自定义工具栏
    - 标题 : {'header':[false, 1, 2, 3, 4, 5, 6]}
    - 加粗 : bold
    - 斜体 : italic
    - 下划线 : underline
    - 作废 : strike
    - 文本对齐方式 : {'align':['','center','right','justify']}
      - [{ align: "" },{ align: "center" },{ align: "right" },{ align: "justify" }]
    - 引用 : blockquote
    - 列表
      - 有序列表 : {'list':'ordered'}
      - 无序列表 : {'list':'bullet'}
      - 多选列表 : {'list':'check'}
    - 脚本
      - 上标 : {'script':'sub'}
      - 下标 : {'script':'super'}
    - 缩进
      - 向前 : {'indent':'-1'}
      - 向后 : {'indent':'+1'}
    - 字体颜色 : color
    - 背景颜色 : background
    - 链接 : link
    - 图片 : image
    - 清除格式 : clean
    - 代码 : code
    - 代码块 : code-block
    - 视频 : video
- disabled : boolean
  - 默认 false， 设置为true时禁用编辑器

2. 接受事件
- @image-added(file, Editor, cursorLocation, resetUploader)，这里不能用驼峰（用驼峰上传会无反应）
  - file : 文件，json-object
    - name : 文件名，不包含路径
    - size :文件大小
    - type : 文件媒体类型（MIME）
    - lastModified : 最后修改时间戳
    - lastModifiedDate : 最后修改日期
    - webkitRelativePath : 文件路径
  - Editor : 当前编辑器对象
  - cursorLocation : int 鼠标所在位置
  - resetUploader : function 获取 file-upload 的value 值的函数
</pre
    >
    <pre class="code">
// @image-added 的一个示例
ImageAdded(file, Editor, cursorLocation, resetUploader) {
  console.log("file", file);
  console.log("Editor", Editor);
  console.log("cursorLocation", cursorLocation);
  console.log("resetUploader", resetUploader);
  /*
  // 上传图片操作(上传至七牛)
  let formData = new FormData();
  let type = file.name.split(".");
  if (type.length &lt; 2) {
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
</pre
    >
  </div>
</template>
 <script>
import { VueEditor } from "vue2-editor";
import { uniqid } from "@qingbing/helper";
export default {
  data() {
    return {
      content1: "<p>content1</p>",
      content2: "<h1>Some initial content</h1>",
      content3: "common",
      editorToolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ["bold", "italic", "underline", "strike", "blockquote"], // toggled buttons
        // [{ align: ["", "center", "right", "justify"] }],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        [
          "code",
          "code-block",
          "video",
          "link",
          "image",
          "clean",
          { color: [] },
          { background: [] },
        ],
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      ],
      editorToolbar3: [
        [
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
          { list: "ordered" },
          { list: "bullet" },
          { script: "sub" },
          { script: "super" },
          "code-block",
          "link",
          "clean",
        ],
      ],
    };
  },
  components: {
    VueEditor,
  },
  methods: {
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
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
    },
    uniqueId() {
      return uniqid();
    },
  },
};
</script>
 
 <style>
.quillWrapper .ql-snow.ql-toolbar {
  text-align: left;
}

.code {
  border: 1px dashed #ff6600;
  text-align: left;
  padding: 10px;
}
</style>