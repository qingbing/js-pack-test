<template>
  <div>
    <div>{{ data.remark }}</div>
    <md-editor
      :formData="data"
      field="remark"
      :navigation="true"
      :isText="true"
    ></md-editor>
    <md-editor :formData="data" field="remark" :isText="false"></md-editor>

    <!-- :imageClick="imageClick"
      :imgAdd="imgAdd"
      :change="change"
      :imgDel="imgDel"
      :save="save" -->
  </div>
</template>

<script>
// 导入编辑器
import Markdown from "@qingbing/vue-markdown";
import data from "./data/field";

export default {
  data() {
    return {
      data,
      fromData: {
        remark: "",
      },
    };
  },
  components: {
    mdEditor: Markdown,
  },
  methods: {
    imageClick: (file) => {
      console.log("====== image click ======");
      console.log(file);
    },
    change: (value) => {
      console.log("====== change ======");
      console.log(value);
    },
    imgAdd: (filename, imgfile) => {
      console.log("====== image add ======");
      console.log(filename, imgfile);
    },
    imgDel: (filename) => {
      console.log("====== image del ======");
      console.log(filename);
    },
    save: (value) => {
      console.log("====== save ======");
      console.log(value);
    },
  },
};
</script>

<style scoped>
</style>