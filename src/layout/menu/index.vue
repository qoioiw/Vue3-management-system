<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="!item.meta.hidden">
        <!-- <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon> -->
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有一个子路由的时候 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        :index="item.children[0].path"
        v-if="!item.children[0].meta.hidden"
      >
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!-- 有路由且个数大于一个1 -->
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1"
    >
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <Meum :menuList="item.children"></Meum>
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import { onLoad } from 'vue'
import { useRouter } from 'vue-router'

defineProps(['menuList'])

// onLoad(){
//     console.log(menuList)
// }
</script>

<script lang="ts">
export default {
  name: 'Meum',
}
</script>

<style></style>
