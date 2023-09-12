<template>
  <div class="chatbox">
    <div class="body">
      <el-scrollbar
        class="body-items"
        height="calc($home-window-height - 40px - 20px - 40px);"
      >
        <div class="itemList">
          <div class="item" v-for="(item, i) in 2" :key="i">
            <img src="/public/favicon.ico" class="actor" />
            <div class="item-body">
              <div class="top">张三</div>
              <div class="bottom">哈哈哈</div>
            </div>
          </div>
        </div>
        <div class="itemList">
          <div class="item" v-for="(item, i) in dataList" :key="i">
            <img src="/public/favicon.ico" class="actor" />
            <div class="item-body">
              <div class="top">张三</div>
              <div class="bottom">{{ dataList }}</div>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <div class="chatbox-input">
      <el-input v-model="input" placeholder="Please input"></el-input>
      <el-icon style="width: 40px; height: 40px">
        <Position />
      </el-icon>
    </div>
    <el-button @click="createSocket">创建连接</el-button>
    <el-button @click="sendMsg('我在发消息')">发送消息</el-button>
    <el-button @click="closeSocket">关闭连接</el-button>
  </div>
</template>

<script lang="ts" setup>
import { createSocket, sendMsg, closeSocket } from '@/utils/websocket'
import { Search } from '@element-plus/icons-vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'
const input = ref('')
const dataList = ref()
onMounted(() => {
  createSocket()
})
onBeforeUnmount(() => {
  console.log('我被调用了')
  closeSocket()
})
</script>

<style lang="scss" scoped>
.chatbox {
  height: calc($home-window-height - 40px);
  width: 100%;

  background: $backound-window;
  border-radius: 20px;

  .body {
    color: white;
    height: calc($home-window-height - 40px - 20px - 40px);

    .body-items {
      padding: 10px;

      .itemList {
        .item {
          display: flex;
          margin-bottom: 5px;

          .actor {
            height: 40px;
            width: 40px;
            border-radius: 20px;
          }

          .item-body {
            margin-top: 8px;
            margin-left: 10px;

            .top {
              font-size: 12px;
              color: #7f7f7f;
            }

            .bottom {
              padding: 15px;
              background-color: #383c4b;
              border-radius: 2px 18px 18px;
              margin-top: 5px;
              font-size: 16px;
              color: #e6e6e6;
            }
          }
        }
      }
    }
  }

  .chatbox-input {
    display: flex;
    margin: 10px;
    height: 40px;
    background: #424656;
    border-radius: 10px;

    :deep(.el-input__wrapper) {
      background-color: #424656;
      box-shadow: none;
    }

    :deep(.el-input__inner) {
      color: white;
    }
  }
}
</style>
