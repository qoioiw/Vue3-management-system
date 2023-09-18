import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus的插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化
// 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//svg插件需要的配置
import 'virtual:svg-icons-register'
// 引入插件
import gloalComponent from '@/components'
// 引入模板的全局的样式
import '@/styles/index.scss'
import router from './router'
import pinia from './store'
// 引入vue-amap
import VueAMap, { initAMapApiLoader } from '@vuemap/vue-amap'
import '@vuemap/vue-amap/dist/style.css'

// 获取应用实例对象
const app = createApp(App)
// 将应用挂载到挂载点上
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})

// // 初始化vue-amap
// initAMapApiLoader({
//   // 高德的key
//   key: 'a8a5924d723ffbe793f0a730303bbd35',
//   securityJsCode: '790ed3f2bee800fe17a2bd03a7c7933a', // 新版key需要配合安全密钥使用
//   //Loca:{
//   //  version: '2.0.0'
//   //} // 如果需要使用loca组件库，需要加载Loca
// })
app.use(VueAMap)
// 安装自定义插件
app.use(gloalComponent)
// 安装仓库
app.use(pinia)
// 注册模板路由
app.use(router)

//引入路由鉴权文件
import './permisstion'
// 将应用挂载到挂载点上
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
