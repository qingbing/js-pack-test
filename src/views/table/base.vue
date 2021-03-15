<template>
  <div>
    <e-table
      :getHeaders="getHeaders"
      :getTableData="getData"
      :beforeRender="beforeRender"
      tableHeight="500px"
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
      ajaxMethod("/header-user", {}, "post", (data) => cb(data));
    },
    getData(cb) {
      ajaxMethod("/user", {}, "post", (data) => cb(data));
    },
  },
};
</script>

<style scoped>
</style>