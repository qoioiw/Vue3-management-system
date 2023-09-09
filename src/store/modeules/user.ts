//创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin, reqUserInfo } from '@/api/user'
// 引入数据类型
import type { loginFrom, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
// 引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { constantRoute, asnycRoute, anyRoute } from '@/router/routes'

// 创建用户小仓库
let useUserStore = defineStore('User', {
  // 小仓库存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户唯一标识token
      menuRoutes: constantRoute, //仓库存储生成菜单需要数组(路由)
      username: '',
      avatar: '',
      //存储当前用户是否包含某一个按钮
    }
  },
  //   异步|逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(data: loginForm) {
      //   登录请求
      let result: loginResponseData = await reqLogin(data)
      //   登录请求:成功200->token
      // 登陆失败:失败201->登陆失败错误的信息
      if (result.code == 200) {
        // pinia存储一下token
        this.token = result.data.token as string
        // 本地存储持久化存储一份
        SET_TOKEN(result.data.token as string)
        // 能保证当前asysc函数返回一个成功的p
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    // 获取用户信息的方法
    async userInfo() {
      // 用户信息存储到仓库之中
      let result = await reqUserInfo()
      if (result.code == 200) {
        this.username = result.data.checkUser.username
        this.avatar = result.data.checkUser.avatar
        return 'ok'
      } else {
        return Promise.reject('获取用户信息失败')
      }
    },
    async userLogout() {
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
    },
  },
  getters: {},
})

// 对外暴露获取小仓库方法
export default useUserStore
