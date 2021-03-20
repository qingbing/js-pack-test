<template>
  <div>
    <el-divider>表格编辑</el-divider>
    <e-table
      :getHeaders="getHeaders"
      :getTableData="getData"
      :beforeRender="beforeRender"
      :pagination="pagination"
    ></e-table>
  </div>
</template>

<script>
// 导入包
import { merge } from "@qingbing/helper";
import { ajaxMethod } from "./../../utils/unit";

export default {
  components: {
    ETable: () => import("@qingbing/element-table"),
    operate: () => import("./../../components/operate"),
    celledit: () => import("@qingbing/element-cell-edit"),
  },
  data() {
    return {
      pagination: {
        pageNo: 1,
        pageSize: 15,
      },
      beforeRender(item, idx) {},
    };
  },
  methods: {
    getHeaders(cb) {
      const editParams = {
        dataType: "user",
        saveUrl: "/user-save",
        saveCallback(cb, change, properties, params) {
          ajaxMethod(
            "user-cell-edit",
            merge({ id: properties.id }, change),
            "post",
            (res) => cb(res)
          );
        },
      };
      cb([
        { name: "_idx", label: "序号", fixed: "left" },
        { name: "date", label: "日期", width: "100", default: "0000-00-00" },
        {
          name: "is_open",
          label: "是否开放",
          //   width: "100",
          component: "celledit",
          params: merge(editParams, {
            type: "switch",
          }),
        },
        {
          name: "username",
          label: "用户名",
          component: "celledit",
          params: merge(editParams, {
            type: "text",
          }),
        },
        {
          name: "name",
          label: "姓名",
          width: "150",
          component: "celledit",
          params: merge(editParams, {
            type: "textarea",
          }),
        },
        {
          name: "age",
          label: "年龄",
          width: "80",
          component: "celledit",
          params: merge(editParams, {
            type: "number",
          }),
        },
        {
          name: "sex",
          label: "性别",
          width: "80",
          component: "celledit",
          params: merge(editParams, {
            type: "select",
            options: {
              0: "密",
              1: "男",
              2: "女",
            },
          }),
        },
        {
          name: "operate",
          label: "操作",
          component: "operate",
          params: {
            addUrl: "/user-add",
            editUrl: "/user-edit",
            viewUrl: "/user-view",
          },
        },
      ]);
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