<template>
  <div>
    <md-editor
      :formData="data"
      field="remark"
      :isText="true"
    ></md-editor>
    
    <md-editor
      :formData="data"
      field="remark"
      :navigation="true"
      :isText="true"
    ></md-editor>
    <!-- :imageClick="imageClick" -->
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
  },
};
</script>

<style scoped>
</style>