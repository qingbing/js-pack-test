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
      cb([
        { name: "_idx", label: "序号", fixed: "left" },
        { name: "date", label: "日期", width: "100", default: "0000-00-00" },
        { name: "name", label: "姓名", width: "150" },
        { name: "age", label: "年龄", width: "50" },
        { name: "sex", label: "性别", width: "50", align: "left" },
        { name: "operate", label: "操作", component: "operate" },
      ]);
    },
    getData(cb) {
      cb([
        {
          username: "RzW",
          name: "万磊",
          sex: "女",
          age: 22,
          date: "2011-06-18",
          info: "电的更看事众心中响求型可适千情。",
        },
        {
          username: "s3Y",
          name: "乔洋",
          sex: "女",
          age: 24,
          date: "1987-09-06",
          info: "置个京等拉己指林众通外手变意老。",
        },
        {
          username: "mc3h#F",
          name: "孔伟",
          sex: "男",
          age: 18,
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