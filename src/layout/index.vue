<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_silder">
      <Logo></Logo>
    </div>
    <div class="layout_tabber">456</div>
    <div class="layout_main">789</div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'

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
