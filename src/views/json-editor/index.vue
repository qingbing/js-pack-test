<template>
  <div>
    <vue-json-editor
      v-model="resultInfo"
      :showBtns="showBtns"
      :mode="mode"
      :modes="modes"
      :expandedOnStart="expandedOnStart"
      @json-change="onJsonChange"
      @json-save="onJsonSave"
      @has-error="onError"
    />
    <pre class="code">
1. 接受参数
- showBtns : 是否显示 vue-json-editor 的保存按钮
  - 默认 true
- expandedOnStart : 在开始时展开
  - 默认 false
- mode : 显示的模式，从 modes 里面选其一
  - 默认 tree
- modes : 支持的显示模式，当传递的 modes 为 [] 时，模式选项将隐藏
  - 默认 ["tree", "code", "form", "text", "view"]
- lang : 保存按钮显示的语言
  - 默认 en， 支持 "en", "zh", "it"

2. 接受事件
- @json-change: json编辑器内容改变时触发
- @json-save: 点击保存时触发
- @has-error: 发生错误时触发
</pre>
  </div>
</template>
 <script>
import vueJsonEditor from "vue-json-editor";

export default {
  data() {
    return {
      showBtns: true,
      expandedOnStart: true,
      mode: "form",
      modes: ["tree", "code", "form", "text", "view"],
      lang: "zh",
      resultInfo: {
        name: "qingbing",
        info: {
          id: 511,
          children: [
            {
              name: "yi",
              age: "yi1",
            },
            {
              name: "er",
              age: "er1",
            },
          ],
        },
      },
    };
  },
  components: {
    vueJsonEditor,
  },
  methods: {
    onJsonChange(value) {
      console.log("value:", value);
    },
    onJsonSave(value) {
      console.log("value:", value);
    },
    onError(err) {
      console.log("err:", err);
    },
  },
};
</script>
 
 <style>
.code {
  border: 1px dashed #ff6600;
  text-align: left;
  padding: 10px;
}
/* jsoneditor右上角默认有一个链接,加css去掉了 */
.jsoneditor-poweredBy {
  display: none;
}
.ace_scroller {
  text-align: left;
}
</style>