<template>
  <div>
    <p>简单模式</p>
    <vue2-editor
      v-model="simpleContent"
      :toolbarMode="'simple'"
      :useSource="true"
    ></vue2-editor>
    <p>普通模式(默认) + 图片后端上传 "useImageHandle='true'"</p>
    <vue2-editor
      v-model="commonContent"
      :toolbarMode="'common'"
      :useSource="true"
      :useImageHandle="true"
      @image-added="handleImageUpload"
    ></vue2-editor>
    <p>文章模式 + 图片URL指定 "useImageUrl='true'"</p>
    <vue2-editor
      v-model="articleContent"
      :toolbarMode="'article'"
      :useImageUrl="true"
      :useSource="true"
    ></vue2-editor>
    <p>代码模式</p>
    <vue2-editor
      v-model="codeContent"
      :toolbarMode="'code'"
      :useSource="true"
    ></vue2-editor>
    <p>全按钮模式</p>
    <vue2-editor
      v-model="fullContent"
      :toolbarMode="'full'"
      :useSource="true"
    ></vue2-editor>
    <p>自定义模式</p>
    <vue2-editor
      v-model="customContent"
      :editorToolbar="editorToolbar"
    ></vue2-editor>
  </div>
</template>

<script>
import Vue2Editor from "@qingbing/vue2-editor";
export default {
  data() {
    return {
      simpleContent: undefined,
      commonContent: "<p>common-default</p>",
      articleContent: "<p>articleContent</p>",
      codeContent: "<p>codeContent</p>",
      fullContent: "<p>fullContent</p>",
      customContent: "<p>customContent</p>",
      editorToolbar: [["source"], ["image"], [{ header: [false, 1, 2, 3, 4, 5, 6] }]],
    };
  },
  components: {
    Vue2Editor,
  },
  methods: {
    testHandle(params) {
      alert(JSON.stringify(params));
    },
    handleImageUpload(file, Editor, cursorLocation, resetUploader) {
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
  },
};
</script>

<style scoped></style>
