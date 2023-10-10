<template>
  <div class="sidebar">
    <div class="userinfo">
      <img
        :src="userStore.avatar"
        style="width: 24px; height: 24px; border-radius: 50%"
      />
      <!-- 下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userStore.username }}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="toHome">返回首页</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
//引入用户相关的仓库,获取当前用户的头像、昵称
import useUserStore from '@/store/modules/user'
// 引入路由器对象
import { useRouter, useRoute } from 'vue-router'
//获取存储用户信息的仓库对象
let userStore = useUserStore()
//获取路由器对象
let $router = useRouter()
//获取路由对向
let $route = useRoute()

const logout = async () => {
  await userStore.userLogout()

  $router.push({ path: '/login', query: { redirect: $route.path } })
}

const toHome = () => {
  $router.push({ path: '/home' })
}
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  width: 100%;

  .userinfo {
    flex-wrap: wrap;
    height: 50px;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .el-dropdown-link {
    padding: 5px;
    color: rgb(255, 255, 255);
  }
}
</style>
