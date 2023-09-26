<template>
  <div class="chartlist">
    <div v-for="(item, i) in items" :key="i">
      <div
        class="item"
        :class="{ menuItem_active: nowActiveIndex === i }"
        @click="setActive(i)"
      >
        <div class="left">
          <img src="/public/favicon.ico" class="actor" />
          <div class="body">
            <div class="top">
              <div class="title">聊天群</div>
              <div class="card">官方</div>
            </div>
            <div class="bottom">
              <div class="name">张三:</div>
              <div class="title">哈哈哈</div>
            </div>
          </div>
        </div>
        <div class="time">16:03</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const nowActiveIndex = ref(0)

const items = ref(Array.from({ length: 2 })) // 初始化 items 数组

const setActive = (index: number) => {
  nowActiveIndex.value = index
}
</script>

<style lang="scss" scoped>
.chartlist {
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: $backound-window;
    border-radius: 10px;
    margin-bottom: 5px;

    .left {
      display: flex;

      .actor {
        height: 40px;
        width: 40px;
        border-radius: 20px;
      }

      .body {
        margin-top: 5px;
        margin-left: 10px;

        .top {
          display: flex;

          .title {
            font-size: 14px;
            color: #ffffff;
            margin-right: 5px;
          }

          .card {
            padding: 2px;
            font-size: 12px;
            background-color: #efe2bb;
            color: #c59512;
            border-radius: 3px;
          }
        }

        .bottom {
          margin-top: 8px;
          display: flex;
          align-items: center;
          font-size: 10px;
          color: #7f7f7f;

          .name {
            margin-right: 5px;
          }
        }
      }
    }

    .time {
      font-size: 10px;
      color: #7f7f7f;
    }
  }

  .item:hover {
    background: lighten($backound-window, 10%);
    border-radius: 5px;
  }

  .item:active {
    background: #2c3e50;
  }

  .menuItem_active {
    background: #2c3e50;
  }
}
</style>
