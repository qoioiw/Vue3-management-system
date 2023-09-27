<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_silder">
      <Logo></Logo>
      <!--展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件-->
        <el-menu
          background-color="#001529"
          text-color="white"
          active-text-color="yellowgreen"
        >
          <!--根据路由动态生成菜单-->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabber">456</div>
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
//获取路由对象

import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
// //获取用户相关的小仓库
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_silder {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabber {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabber-height;
    top: 0px;
    left: $base-menu-width;
    transition: all 0.3s;
  }

  .layout_main {
    background: green;
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabber-height);
    left: $base-menu-width;
    top: $base-tabber-height;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
  }
}
</style>
