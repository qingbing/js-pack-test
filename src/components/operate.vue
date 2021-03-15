<template>
  <span>
    <el-link type="info" @click="handView">详情</el-link> |
    <el-link type="warning" @click="handEdit">编辑</el-link> |
    <el-link type="danger" @click="handDelete">删除</el-link>
  </span>
</template>

<script>
export default {
  props: {
    scope: {
      type: Object,
      require: true,
    },
    index: {
      type: Number,
      require: false,
    },
    property: {
      type: String,
      require: true,
    },
    row: {
      type: Object,
      require: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handView() {
      console.log("handView")
      console.log(this.row.address)
    },
    handEdit() {
      console.log("handhandEdit¬View")
      console.log(this.row.address)
    },
    handDelete() {
      console.log("handDelete")
      console.log(this.row.address)
    },
  },
};
</script>