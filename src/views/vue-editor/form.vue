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
        :formData="formData"
        :items="items"
        :viewFields="viewFields"
        :textFields="textFields"
        :rules="rules"
      ></element-form>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <h1>
      <p>rules</p>
      {{ rules }}
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
      rules: {},
      formData,
      items,
      viewFields,
      textFields: [],
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