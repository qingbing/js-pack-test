<template>
  <div>
    <el-form
      ref="formData"
      :model="formData"
      :rules="rules"
      label-width="120px"
      label-position="left"
    >
      <element-form
        :isForm="isForm"
        :formData="formData"
        :items="items"
        :viewFields="viewFields"
        :textFields="textFields"
        :rules="rules"
      ></element-form>
    </el-form>
    <h1>
      <p>form</p>
      {{ formData }}
    </h1>
  </div>
</template>

<script>
// 导入组件
import fieldsFunc from "./data/field";
// 导出
export default {
  data() {
    const { formData, items, viewFields, textFields } = fieldsFunc();
    return {
      isForm: false,
      rules: {},
      formData,
      items,
      viewFields,
      textFields,
    };
  },
  components: {},
  methods: {
    // 提交函数
    onSubmit() {
      this.$refs["formData"].validate((valid) => {
        if (valid) {
          console.log(JSON.stringify(this.formData));
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>