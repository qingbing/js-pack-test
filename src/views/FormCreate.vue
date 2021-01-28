<template>
  <div class="about">
    <h1>This is an form-view page</h1>

    <el-form
      ref="formData"
      :model="formData"
      label-width="120px"
      label-position="left"
    >
      <element-form
        :formData="formData"
        :items="items"
        :viewFields="viewFields"
        :textFields="textFields"
      ></element-form>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <h1>
      <p>form</p>
      {{ formData }}
    </h1>
  </div>
</template>

<script>
// 数据源获取
import fieldsFunc from "./../data/field";
import { ajax } from "./../utils/ajax";

// 导出
export default {
  data() {
    const { formData, items, viewFields, textFields } = fieldsFunc();

    return {
      formData,
      items,
      viewFields,
      textFields,
    };
  },
  methods: {
    // 提交函数
    onSubmit() {
      console.log(JSON.stringify(this.formData));
    },
  },
};
</script>

<style scoped>
</style>