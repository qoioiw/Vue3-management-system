<template>
  <div class="homePage">
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
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getTime } from '@/utils/time'
//引入用户相关的仓库,获取当前用户的头像、昵称
import useUserStore from '@/store/modeules/user'
import { onMounted } from 'vue'
// 引入路由器对象
import { useRouter } from 'vue-router'
//获取存储用户信息的仓库对象
let userStore = useUserStore()
let $router = useRouter()
onMounted(() => {
  userStore.userInfo()
})

const logout = () => {
  userStore.userLogout()
  $router.push({ path: '/login' })
}
</script>

<style scoped lang="scss">
.homePage {
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #7c7c7c 0%, rgba(245, 245, 245, 0) 100%);
  display: flex;

  flex-direction: row-reverse;
  /* 从右到左排列 */
  justify-content: flex-start;

  /* 从右侧开始对齐 */
  .userinfo {
    flex-wrap: wrap;
    height: 50px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .el-dropdown-link {
    padding: 5px;
    color: black;
  }
}
</style>
