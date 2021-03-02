<template>
  <div class="text-left">
    <h3>1.静态html</h3>
    <pre v-highlight:rainbow><code class="language-js">var date = new Date(); 
var a = 5;
var b = 6;
var sum = a + b;
console.log(sum);
</code></pre>

    <h3>2.动态加载字段</h3>
    <!-- <pre v-highlight="content1"><code></code></pre>

    <h3>3.动态加载html字段</h3>
    <div v-html="content2" v-highlight></div>

    <div v-html="content3" v-highlight></div> -->

    <h3>100.使用方法</h3>
    <pre class="border">
<p><strong style="color: rgb(86, 156, 214);"># 封装 vue-element-ui 的组件</strong></p><p>对 vue-element-ui 进行封装 代码高亮</p><p><br></p><p><strong style="color: rgb(86, 156, 214);">### ====== 版本说明 ======</strong></p><p><span style="color: rgb(103, 150, 230);">-</span> 1.0.0 : 高亮初始化</p><p><br></p><p><strong style="color: rgb(86, 156, 214);">## 1. 安装</strong></p><p>```</p><p>npm install @qingbing/vue-highlight</p><p>```</p><p><br></p><p><strong style="color: rgb(86, 156, 214);">## 2. 全局引用导入，在vue的main.js中确认加入如下代码</strong></p><p>```js</p><p><span style="color: rgb(197, 134, 192);">import</span> <span style="color: rgb(156, 220, 254);">Highlight</span> <span style="color: rgb(197, 134, 192);">from</span> <span style="color: rgb(206, 145, 120);">"@qingbing/vue-highlight"</span>;</p><p><span style="color: rgb(156, 220, 254);">Vue</span>.<span style="color: rgb(220, 220, 170);">use</span>(<span style="color: rgb(156, 220, 254);">Highlight</span>);</p><p>```</p><p><br></p><p><strong style="color: rgb(86, 156, 214);">## 3. vue文件中使用</strong></p><p><strong style="color: rgb(86, 156, 214);">### 3.1 静态html</strong></p><p>```</p><p>&lt;pre v-highlight&gt;&lt;code class="language-js"&gt;var date = new Date(); &lt;/code&gt;&lt;/pre&gt;</p><p>```</p><p><br></p><p><br></p><p><strong style="color: rgb(86, 156, 214);">### 3.2 动态加载字段</strong></p><p>```</p><p># 定义字段</p><p>var highContent = '&lt;php? echo 11;';</p><p><br></p><p># html 标签加载</p><p>&lt;pre v-highlight="highContent"&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;</p><p>```</p><p><br></p><p><strong style="color: rgb(86, 156, 214);">### 3.3 动态加载html字段</strong></p><p>```</p><p># 定义字段</p><p>var highContent = '&lt;pre&gt;&lt;code&gt;&lt;php? echo 11;&lt;/code&gt;&lt;/pre&gt;';</p><p><br></p><p># html 标签加载</p><p>&lt;div v-highlight v-html="highContent"&gt;&lt;/div&gt;</p><p>```</p>
</pre>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      content1: "<php? echo 11;",
      content2: "<p>Hello World!</p><pre><code>&lt;php? echo 11;</code></pre>",
      content3:
        '<p>default demo</p><pre><code class="hljs php"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta"><span class="hljs-meta">&lt;?php</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>\n<span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">echo</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> <span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"123"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>;\n</code></pre><p>hao</p><p>hello</p>',
    };
  },
  components: {},
  methods: {},
};
</script>
