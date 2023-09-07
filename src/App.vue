<template>
  <div>
    <h1>App根页面</h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import {reqLogin} from './api/user'
onMounted(()=>{
  reqLogin({username:'admin',password:'111111'})
})
</script>

<style scoped lang="scss">
</style>
