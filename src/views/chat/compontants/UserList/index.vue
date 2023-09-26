<template>
  <div class="UserList">
    <div class="title">在线人数：103</div>
    <div class="item" v-for="(item, i) in 2" :key="i">
      <div class="item-lfet">
        <img src="/public/favicon.ico" class="actor" />
        <div class="green-badge"></div>
      </div>
      <div class="name">张三</div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.UserList {
  height: calc($home-window-height - 40px);
  width: 100%;
  padding: 10px;
  background: $backound-window;
  border-radius: 20px;

  .title {
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 3px;

    .item-lfet {
      position: relative;

      .actor {
        height: 24px;
        width: 24px;
        border-radius: 20px;
      }

      .green-badge {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 8px;
        /* 调整绿标的宽度 */
        height: 8px;
        /* 调整绿标的高度 */
        background-color: #adff2f;
        border-radius: 50%;
        /* 使绿标变成圆形 */
        content: '';
        /* 必须设置空内容以显示 */
      }
    }

    .name {
      margin-left: 5px;
      font-size: 14px;
      color: #ffffff;
    }
  }

  .item:hover {
    background: lighten($backound-window, 10%);
    border-radius: 5px;
  }
}
</style>
