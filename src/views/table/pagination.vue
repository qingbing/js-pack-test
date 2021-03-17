<template>
  <div>
    <el-form
      :inline="true"
      :model="queryForm"
      class="demo-form-inline"
      ref="query"
    >
      <el-form-item label="审批人">
        <el-input v-model="queryForm.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="queryForm.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <e-table
      :getHeaders="getHeaders"
      :getTableData="getData"
      :beforeRender="beforeRender"
      :pagination="pagination"
      ref="pageTable"
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
      refreshFlag: 1,
      pagination: {
        pageNo: 1,
        pageSize: 15,
      },
      queryForm: {
        user: "1",
        region: "",
      },
      beforeRender(item, idx) {},
    };
  },
  methods: {
    onSubmit() {
      console.log(this.$refs["pageTable"].refreshTable());
    },
    getHeaders(cb) {
      ajaxMethod("/header-user", { type: "user" }, "post", (res) => cb(res));
    },
    getData(cb) {
      ajaxMethod(
        "/user-pagination",
        merge(this.pagination, this.queryForm),
        "post",
        (res) => cb(res)
      );
    },
  },
};
</script>

<style scoped>
</style>