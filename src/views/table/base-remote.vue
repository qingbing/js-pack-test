<template>
  <div>
    <e-table
      :getHeaders="getHeaders"
      :getTableData="getData"
      :beforeRender="beforeRender"
    ></e-table>
  </div>
</template>

<script>
import { ajaxMethod } from "../../utils/unit";

// 导入包
export default {
  components: {
    ETable: () => import("@qingbing/element-table"),
    operate: () => import("./../../components/operate"),
  },
  data() {
    return {
      beforeRender(item, idx) {},
    };
  },
  methods: {
    getHeaders(cb) {
      ajaxMethod("/header-user", {}, "post", (res) => cb(res));
    },
    getData(cb) {
      ajaxMethod("/user", {}, "post", (res) => cb(res));
    },
  },
};
</script>

<style scoped>
</style>