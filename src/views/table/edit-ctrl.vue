<template>
  <div>
    <el-divider>控制表格编辑（元素编辑）{{ config }}{{ editable }}</el-divider>
    <celledit
      property="isEdit"
      :row="config"
      :params="config.params"
    ></celledit>

    <el-divider>表格编辑</el-divider>
    <e-table
      :getHeaders="getHeaders"
      :getTableData="getData"
      :beforeRender="beforeRender"
      :editable="editable"
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
      config: {
        isEdit: "0",
        params: { type: "switch" },
      },
      beforeRender(item, idx) {},
    };
  },
  computed: {
    editable() {
      return "0" !== this.config.isEdit;
    },
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
      cb([
        {
          id: "1",
          username: "RzW",
          is_open: 1,
          name: "万磊",
          sex: "nan",
          age: "22",
          date: "2011-06-18",
          info: "电的更看事众心中响求型可适千情。",
        },
        {
          id: "2",
          username: "s3Y",
          is_open: "0",
          name: "乔洋",
          sex: "nv",
          age: "24",
          date: "1987-09-06",
          info: "置个京等拉己指林众通外手变意老。",
        },
        {
          id: "3",
          username: "mc3h#F",
          name: "孔伟",
          sex: "2",
          age: "18",
          date: "2009-03-22",
          info: "影民离世文为任置格资支放你高京。",
        },
      ]);
    },
  },
};
</script>

<style scoped>
</style>