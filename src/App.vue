<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
  </div>
</template>

<script lang="ts" setup>
// 引入图标组件
import { Plus } from '@element-plus/icons-vue'
for (let i = 0; i < 100; i++) {
  console.log(i)
}

console.log('我是彭于晏')
</script>

<style></style>
