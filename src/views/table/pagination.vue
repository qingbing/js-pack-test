<template>
  <div>
    <e-table
      :getHeaders="getHeaders"
      :getTableData="getData"
      :beforeRender="beforeRender"
      :pagination="pagination"
    ></e-table>
    <div>
      {{ pagination }}
    </div>
  </div>
</template>

<script>
import { ajaxMethod } from "../../utils/unit";
import { merge } from "@qingbing/helper";

// 导入包
export default {
  components: {
    ETable: () => import("@qingbing/element-table"),
    operate: () => import("./../../components/operate"),
  },
  data() {
    return {
      pagination: {
        // pageNo: 2,
        pageSize: 15,
      },
      params: {
        sex: "1",
      },
      beforeRender(item, idx) {},
    };
  },
  methods: {
    getHeaders(cb) {
      ajaxMethod("/header-user", { type: "user" }, "post", (res) => cb(res));
    },
    getData(cb) {
      ajaxMethod("/user-pagination", merge(this.pagination, this.params), "post", (res) =>
        cb(res)
      );
    },
  },
};
</script>

<style scoped>
</style>