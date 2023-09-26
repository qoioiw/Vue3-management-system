<template>
  <div class="homePage">
    <!-- 窗口 -->
    <div class="windows">
      <div class="windows-body">
        <el-row :gutter="20">
          <el-col :span="3">
            <SiderBar></SiderBar>
          </el-col>
          <el-col :span="5">
            <ChartList></ChartList>
          </el-col>
          <el-col :span="12">
            <ChatBox></ChatBox>
          </el-col>
          <el-col :span="4">
            <UserList></UserList>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import homeWindow from './compontants/homewindows/index.vue'
import SiderBar from './compontants/SideBar/index.vue'
import ChatBox from './compontants/ChatBox/index.vue'
import UserList from './compontants/UserList/index.vue'
import ChartList from './compontants/ChartList/index.vue'
</script>

<style scoped lang="scss">
.homePage {
  width: 100%;
  height: 100vh;
  background: url($backound);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  display: flex;

  flex-direction: row-reverse;
  /* 从右到左排列 */
  justify-content: flex-start;

  /* 从右侧开始对齐 */

  .windows {
    width: $home-window-width;
    height: $home-window-height;
    margin: auto auto;
    padding: 20px;
    background-color: #272a37;
    border-radius: 20px;

    color: white;
    .windows-body {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
