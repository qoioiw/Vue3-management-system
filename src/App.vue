<template>
  <div>
    <h1>测试SVG</h1>
  </div>
</template>

<script lang="ts" setup>
import request from '@/utils/request'
import { onMounted } from 'vue';

// 当组件挂载完毕 测试发一个请求
onMounted(()=>{
  request({
    url:'/user/login',
    method:'post',
    data:{
      username:'admin',
      password:'111111'
    }
  }).then(res=>{
    console.log(res)
  })
})
</script>

<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>
