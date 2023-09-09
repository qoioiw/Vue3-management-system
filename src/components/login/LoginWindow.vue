<template>
  <div>
    <el-form
      class="login_form"
      :model="loginForm"
      :rules="rules"
      ref="loginForms"
    >
      <el-form-item prop="username">
        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          :prefix-icon="Lock"
          v-model="loginForm.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          class="login_btn"
          type="primary"
          size="default"
          @click="login"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
// 引入用户相关的小仓库
import useUserStore from '@/store/modeules/user'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'
import { getTime } from '@/utils/time'
// 获取路由器
let $router = useRouter()
// 引入小仓库
let userStore = useUserStore()
//获取el-form组件
let loginForms = ref()
//定义变量控制按钮加载效果
let loading = ref(false)

// 收集账号与密码
let loginForm = reactive({ username: 'admin', password: '111111' })
// 登录按钮回调
const login = async () => {
  // 保证全部表单校验通过在发请求
  await loginForms.value.validate()

  // 加载效果
  loading.value = true
  // 点击登录按钮以后干什么
  // 通知仓库发登录请求
  // 请求成功->首页展示数据的地方
  // 请求失败->弹出登陆失败信息
  try {
    // 保证登录成功
    await userStore.userLogin(loginForm)
    // 编程式导航跳转到展示数据首页
    $router.push('/'),
      // 登录成功的提示信息
      ElNotification({
        type: 'success',
        message: '登录成功',
        title: `Hi,${getTime()}好`,
      })
    // 登陆成功的加载效果消失

    loading.value = false
  } catch (error) {
    // 登陆失败的加载效果消失
    loading.value = false
    // 登录失败的提示信息
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

//自定义校验规则函数
const validatorUserName = (rule: any, value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}
//定义表单校验需要配置对象
const rules = {
  //规则对象属性:
  //required,代表这个字段务必要校验的
  //min:文本长度至少多少位
  //max:文本长度最多多少位
  //message:错误的提示信息
  //trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
  username: [
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
    { trigger: 'change', validator: validatorUserName },
  ],
  password: [
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change' }
    { trigger: 'change', validator: validatorPassword },
  ],
}
</script>

<style lang="scss" scoped>
.login_form {
  background-size: cover;
  padding: 40px;

  .login_btn {
    width: 100%;
    background: #1c0b07;
  }

  :deep(.el-form-item__error) {
    color: #c50000;
  }
}
</style>
