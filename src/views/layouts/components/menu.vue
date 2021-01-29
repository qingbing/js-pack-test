<template>
  <el-aside style="width:200px">
    <el-menu
      class="zf-menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <template v-for="(item, mainI) in items">
        <!-- 菜单下有子菜单 -->
        <el-submenu
          v-if="item.subItems && item.subItems.length > 0"
          :key="mainI"
          :index="item.route"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item
            v-for="(subItem, subI) in item.subItems"
            :index="subItem.route"
            :key="'menu' + mainI + '-' + subI"
          >
            <i :class="subItem.icon"></i>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-submenu>
        <!-- 只有一级菜单 -->
        <el-menu-item v-else :key="mainI" :index="item.route">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
// 引入数据
import items from "@/data/menu";

// 默认导出
export default {
  data() {
    return {
      items,
    };
  },
  created() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
.zf-menu {
  text-align: left;
  border: none;
}
.zf-menu:not(.el-menu--collapse) {
  width: 200px;
}
.toggle-collapse {
  background-color: #545c64;
  border-bottom: 1px solid #cccccc;
  cursor: pointer;
  color: #ffffff;
  font-size: 35px;
  line-height: 60px;
}
</style>
