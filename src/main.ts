import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus的插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化
// 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg插件需要的配置
import 'virtual:svg-icons-register'
// 引入插件
import gloalComponent from '@/components'
// 引入模板的全局的样式
import '@/styles/index.scss'
import router from './router'
import pinia from './store'
// 获取应用实例对象
const app = createApp(App)
// 将应用挂载到挂载点上
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})

// 安装自定义插件
app.use(gloalComponent)
// 安装仓库
app.use(pinia)
// 注册模板路由
app.use(router)
//引入路由鉴权文件
import './permisstion'
// 将应用挂载到挂载点上
app.mount('#app')
