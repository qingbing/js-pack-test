<template>
  <div class="about">
    <h1>This is an form-view page</h1>
    <el-form
      ref="formData"
      :model="formData"
      :rules="rules"
      label-width="120px"
      label-position="left"
    >
      <el-form-item label="时间1" prop="time" key="time" class="text-left">
        <el-time-picker
          v-model="formData.time"
          value-format="HH:mm"
          :picker-options="{
            selectableRange: '08:00:00 - 20:00:00'
          }"
          placeholder="任意时间点"
        >
        </el-time-picker>
      </el-form-item>

      <el-form-item
        label="时间段"
        prop="timerange"
        :key="'timerange'"
        class="text-left"
      >
        <el-time-picker
          is-range
          v-model="formData.timerange"
          value-format="HH:mm"
          :picker-options="{
            selectableRange: '08:00:00 - 20:00:00'
          }"
          placeholder="任意时间点"
        >
        </el-time-picker>
      </el-form-item>

      <el-form-item label="日期" prop="date" key="date" class="text-left">
        <el-date-picker
          v-model="formData.date"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item
        label="日期段"
        prop="daterange"
        :key="'daterange'"
        class="text-left"
      >
        <el-date-picker
          v-model="formData.daterange"
          type="daterange"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item label="月" prop="month" key="month" class="text-left">
        <el-date-picker
          v-model="formData.month"
          type="month"
          value-format="yyyy-MM"
          placeholder="选择月"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item
        label="月段"
        prop="monthrange"
        key="monthrange"
        class="text-left"
      >
        <el-date-picker
          v-model="formData.monthrange"
          type="monthrange"
          value-format="yyyy-MM"
          placeholder="选择月"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item label="年" prop="year" key="year" class="text-left">
        <el-date-picker
          v-model="formData.year"
          type="year"
          value-format="yyyy"
          placeholder="选择年"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item label="周" prop="week" key="week" class="text-left">
        <el-date-picker
          v-model="formData.week"
          type="week"
          value-format="yyyy-MM-dd"
          placeholder="选择周"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item
        label="日期时间"
        prop="datetime"
        key="datetime"
        class="text-left"
      >
        <el-date-picker
          v-model="formData.datetime"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item
        label="日期时间"
        prop="datetimerange"
        key="datetimerange"
        class="text-left"
      >
        <el-date-picker
          v-model="formData.datetimerange"
          type="datetimerange"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item label="多时间" prop="dates" key="dates" class="text-left">
        <el-date-picker
          v-model="formData.dates"
          type="dates"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择多时间"
        >
        </el-date-picker>
      </el-form-item>

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
// 导出
export default {
  data() {
    return {
      formData: {
        time: "13:45",
        timerange: ["08:00", "18:02"],
        date: "2021-04-22",
        daterange: ["2021-04-08", "2021-05-04"],
        month: "2021-07",
        monthrange: ["2021-08", "2022-07"],
        year: "2024",
        week: "2021-04-12",
        datetime: "2021-04-09 00:00:02",
        datetimerange: ["2021-04-22 00:00:00", "2021-05-20 00:00:00"],
        dates: [
          "2021-04-22 00:00:00",
          "2021-04-23 00:00:00",
          "2021-04-28 00:00:00"
        ]
      },
      rules: {}
    };
  },
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
