<template>
  <div class="index">
    <div class="window">
      <div class="title">ApiKid</div>
      <div class="login-window">
        <LoginWindow />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginWindow from './compontants/LoginWindow/index.vue'
</script>

<style scoped lang="scss">
.index {
  width: 100%;
  height: 100vh;
  background: url($backound);
  /* 使用背景图片 */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  /* 让伪元素相对于这个容器定位 */
  .window {
    position: absolute;
    left: 65%;
    top: 50%;
    transform: translate(0, -55%);
    width: 400px;

    .title {
      font-family: 'Cursive', cursive;
      /* 使用手写风格字体，可以根据需要更换字体 */
      font-style: italic;
      /* 将文字设置为斜体 */
      font-size: 36px;
      /* 字体大小 */
      font-weight: bold;
      /* 字体粗细 */
      color: #280f09;
      /* 字体颜色，可以根据需要更改 */
      text-align: center;
      /* 文本居中对齐 */
      text-transform: uppercase;
      /* 文本转换为大写 */
      letter-spacing: 4px;
      /* 字母间距 */
      margin-bottom: 20px;
      /* 底部外边距 */
    }

    .login-window {
      background: $background-color;
    }
  }
}
</style>
