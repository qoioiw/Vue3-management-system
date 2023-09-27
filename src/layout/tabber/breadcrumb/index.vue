<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <Expand></Expand>
  </el-icon>

  <el-breadcrumb separator-icon="ArrowRight">
    <!-- 面包倒台展示路由名字与标题 -->
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon style="margin-right:2px;">
        <component :is="item.meta.icon"></component>
      </el-icon>

      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped></style>
