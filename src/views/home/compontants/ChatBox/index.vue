<template>
  <div class="chatbox">
    <div></div>
    <el-button @click="createSocket">创建连接</el-button>
    <el-button @click="sendMsg('我在发消息')">发送消息</el-button>
    <el-button @click="closeSocket">关闭连接</el-button>
  </div>
</template>

<script lang="ts" setup>
import { createSocket, sendMsg, closeSocket } from '@/utils/websocket'
import { onMounted } from 'vue'
// 声明一个可重新赋值的变量
let socket: any
let socketConnecting = false
// 在组件挂载之前创建WebSocket连接
onMounted(() => {
  //   socket = new WebSocket('ws://localhost:3000');
})
</script>

<style lang="scss" scoped>
.chatbox {
  height: calc($home-window-height - 40px);
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  background: $backound-window;
  border-radius: 20px;
}
</style>
