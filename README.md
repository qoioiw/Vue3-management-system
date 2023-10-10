1. ApiKid 

   

   #### 环境准备

   - node v16.15.2 
   - pnpm 8.0.0

   ## 1.1 项目创建

   ## 安装pnpm     npm i -g pnpm

   ### 第一步 pnpm create vite   创建脚手架

   ### 第二步  选择项目名字  ApiKid

   ### 第三选择创建什么类型的项目 Vue

   ### 第四步 选择脚本语言  Ts

   #### 创建完毕

   

   ## 1.2 初始化  安装依赖 并运行

   ```
      pnpm install
   
      pnpm run dev
   ```

   

   ## 1.3  项目初始化完成

   

   ## 1.4  删掉一些默认文件，项目文件的配置

   自动运行自动打开页面

   ```
   //package.json
   ```

   ```
   "dev": "vite --open",
   ```

   安装eslint校验代码工具配置

   选用检查并发现问题，选用js modules开发，vue框架，ts，brower浏览器端，config文件时js文件，然后安装一个插件，pnpm

   ![image-20230907100831208](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20230907100831208.png)

   ### 多出elintrc.cjs文件（可以稍微看一下）

   ```
   module.exports = {
      //运行环境
       "env": { 
           "browser": true,//浏览器端
           "es2021": true,//es2021
       },
       //规则继承
       "extends": [ 
          //全部规则默认是关闭的,这个配置项开启推荐规则,推荐规则参照文档
          //比如:函数不能重名、对象不能出现重复key
           "eslint:recommended",
           //vue3语法规则
           "plugin:vue/vue3-essential",
           //ts语法规则
           "plugin:@typescript-eslint/recommended"
       ],
       //要为特定类型的文件指定处理器
       "overrides": [
       ],
       //指定解析器:解析器
       //Esprima 默认解析器
       //Babel-ESLint babel解析器
       //@typescript-eslint/parser ts解析器
       "parser": "@typescript-eslint/parser",
       //指定解析器选项
       "parserOptions": {
           "ecmaVersion": "latest",//校验ECMA最新版本
           "sourceType": "module"//设置为"script"（默认），或者"module"代码在ECMAScript模块中
       },
       //ESLint支持使用第三方插件。在使用插件之前，您必须使用npm安装它
       //该eslint-plugin-前缀可以从插件名称被省略
       "plugins": [
           "vue",
           "@typescript-eslint"
       ],
       //eslint规则
       "rules": {
       }
   }
   ```

   

   #### 紧接着就是继续安装插件  vue3环境代码校验插件

   安装指令

   ```
   pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
   ```

   作用如下

   ```
   # 让所有与prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查
   "eslint-config-prettier": "^8.6.0",
   "eslint-plugin-import": "^2.27.5",
   "eslint-plugin-node": "^11.1.0",
   # 运行更漂亮的Eslint，使prettier规则优先级更高，Eslint优先级低
   "eslint-plugin-prettier": "^4.2.1",
   # vue.js的Eslint插件（查找vue语法错误，发现错误指令，查找违规风格指南
   "eslint-plugin-vue": "^9.9.0",
   # 该解析器允许使用Eslint校验所有babel code
   "@babel/eslint-parser": "^7.19.1",
   ```

   修改.eslintrc.cjs配置文件   添加一下配置文件的规则进去了  需要手动cv添加一下

   ```
   // @see https://eslint.bootcss.com/docs/rules/
   
   module.exports = {
     env: {
       browser: true,
       es2021: true,
       node: true,
       jest: true,
     },
     /* 指定如何解析语法 */
     parser: 'vue-eslint-parser',
     /** 优先级低于 parse 的语法解析配置 */
     parserOptions: {
       ecmaVersion: 'latest',
       sourceType: 'module',
       parser: '@typescript-eslint/parser',
       jsxPragma: 'React',
       ecmaFeatures: {
         jsx: true,
       },
     },
     /* 继承已有的规则 */
     extends: [
       'eslint:recommended',
       'plugin:vue/vue3-essential',
       'plugin:@typescript-eslint/recommended',
       'plugin:prettier/recommended',
     ],
     plugins: ['vue', '@typescript-eslint'],
     /*
      * "off" 或 0    ==>  关闭规则
      * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
      * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
      */
     rules: {
       // eslint（https://eslint.bootcss.com/docs/rules/）
       'no-var': 'error', // 要求使用 let 或 const 而不是 var
       'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
       'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
       'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
       'no-unexpected-multiline': 'error', // 禁止空余的多行
       'no-useless-escape': 'off', // 禁止不必要的转义字符
   
       // typeScript (https://typescript-eslint.io/rules)
       '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
       '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
       '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
       '@typescript-eslint/no-non-null-assertion': 'off',
       '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
       '@typescript-eslint/semi': 'off',
   
       // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
       'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
       'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
       'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
       'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
     },
   }
   
   ```

   然后文件就会开始生效了

   这时候写一个.eslintignore文件 用于写不需要校验的文件

   ```
   dist
   node_modules
   ```

   然后开始写入指令 用来手动校验js代码

   ```
   "scripts": {
       "lint": "eslint src",
       "fix": "eslint src --fix",
   }
   ```

   当运行上一个指令时 校验代码   后一个是校验并修复

   ok 可以在js代码中写一个 var a=100   因为eslint不支持var写法  所以第一个指令会抛出问题  这时候可以用第二个指令修复

   ### 配置prettier  

   ### Eslint是为了保证js代码质量  而Prettier是为了保证代码的美观问题

   ####   安装依赖包

   ```
   pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
   ```

   #### 创建 .prettierrc.json 文件添加规则

   ```
   {
     "singleQuote": true,
     "semi": false,
     "bracketSpacing": true,
     "htmlWhitespaceSensitivity": "ignore",
     "endOfLine": "auto",
     "trailingComma": "all",
     "tabWidth": 2
   }
   ```

   #### 同理配置一下.prettierignore忽略文件

   创建.prettierignore文件并添加规则

   ```
   /dist/*
   /html/*
   .local
   /node_modules/**
   **/*.svg
   **/*.sh
   /public/*
   ```

   ```
   //测试代码
   const fun =()=>{
   
   
   	console.log("我爱我的祖国")
   }
   fun()
   ```

   运行一下pnpm run fix

   修复后的代码

   ```
   //测试代码
   const fun = () => {
     console.log('我爱我的祖国')
   }
   fun()
   ```

   ### 配置stylelint

   [stylelint](https://stylelint.io/)为css的lint工具。可格式化css代码，检查css语法错误与不合理的写法，指定css书写顺序等。

   使用scss作为预处理器 安装依赖

   ```
   pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
   ```

   创建.stylelintrc.cjs并配置文件

   ```
   // @see https://stylelint.bootcss.com/
   
   module.exports = {
     extends: [
       'stylelint-config-standard', // 配置stylelint拓展插件
       'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
       'stylelint-config-standard-scss', // 配置stylelint scss插件
       'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
       'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
       'stylelint-config-prettier', // 配置stylelint和prettier兼容
     ],
     overrides: [
       {
         files: ['**/*.(scss|css|vue|html)'],
         customSyntax: 'postcss-scss',
       },
       {
         files: ['**/*.(html|vue)'],
         customSyntax: 'postcss-html',
       },
     ],
     ignoreFiles: [
       '**/*.js',
       '**/*.jsx',
       '**/*.tsx',
       '**/*.ts',
       '**/*.json',
       '**/*.md',
       '**/*.yaml',
     ],
     /**
      * null  => 关闭该规则
      * always => 必须
      */
     rules: {
       'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
       'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
       'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
       'no-empty-source': null, // 关闭禁止空源码
       'selector-class-pattern': null, // 关闭强制选择器类名的格式
       'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
       'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
       'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
       'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
       'selector-pseudo-class-no-unknown': [
         // 不允许未知的选择器
         true,
         {
           ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
         },
       ],
     },
   }
   ```

   创建.stylelintignore忽略文件

   ```
   /node_modules/*
   /dist/*
   /html/*
   /public/*
   ```

   运行这个配置一下脚本

   ```
   "scripts": {
   	"lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix"
   }
   ```

   最后配置统一的prettier来格式化我们的js和css，html代码  替换一下  配置一下命令

   ```
    "scripts": {
       "dev": "vite --open",
       "build": "vue-tsc && vite build",
       "preview": "vite preview",
       "lint": "eslint src",
       "fix": "eslint src --fix",
       "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
       "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
       "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix"
     },
   ```

   #####  集成命令 **当我们运行`pnpm run format`的时候，会把代码直接格式化**

   ### 到这一步 其实可以说对于个人开发的代码规范开发以及可以了  缺点每次需要手动提交

   进一步规范

   配置husky，在上面我们已经集成好了我们代码校验工具，但是需要每次手动的去执行命令才会格式化我们的代码。如果有人没有格式化就提交了远程仓库中，那这个规范就没什么用。所以我们需要强制让开发人员按照代码规范来提交。

   要做到这件事情，就需要利用husky在代码提交之前触发git hook(git在客户端的钩子)，然后执行`pnpm run format`来自动的格式化我们的代码。

   安装husky

   ```
   pnpm install -D husky
   ```

   执行

   ```
   npx husky-init
   ```

   会在根目录下生成个一个.husky目录，在这个目录下面会有一个pre-commit文件，这个文件里面的命令在我们执行commit的时候就会执行

   在`.husky/pre-commit`文件添加如下命令：

   ```
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"
   pnpm run format
   ```

   

   创建一个gitee项目  然后按照要求格式化一下

   然后

   ```
    git add . //查看追踪一下
   
   git commit -m '提交名字'  //这一步的时候会执行对应的格式化操作
   
   git push  //提交远程仓库
   ```

   这里提交有点问题本地的格式化了，但是提交的没有被格式化，需要再次提交一次

   

   ## 忽略commit信息和强制使用包管理工具

   #### 对于我们的commit信息，也是有统一规范的，不能随便写,要让每个人都按照统一的标准来执行，我们可以利用**commitlint**来实现。

   安装包

   ```
   pnpm add @commitlint/config-conventional @commitlint/cli -D
   ```

   添加配置文件，新建`commitlint.config.cjs`(注意是cjs)，然后添加下面的代码：

   ```
   module.exports = {
     extends: ['@commitlint/config-conventional'],
     // 校验规则
     rules: {
       'type-enum': [
         2,
         'always',
         [
           'feat',
           'fix',
           'docs',
           'style',
           'refactor',
           'perf',
           'test',
           'chore',
           'revert',
           'build',
         ],
       ],
       'type-case': [0],
       'type-empty': [0],
       'scope-empty': [0],
       'scope-case': [0],
       'subject-full-stop': [0, 'never'],
       'subject-case': [0, 'never'],
       'header-max-length': [0, 'always', 72],
     },
   }
   ```

   在`package.json`中配置scripts命令

   ```
   # 在scrips中添加下面的代码
   {
   "scripts": {
       "commitlint": "commitlint --config commitlint.config.cjs -e -V"
     },
   }
   ```

   配置结束，现在当我们填写`commit`信息的时候，前面就需要带着下面的`subject`

   ## 1.5  集成element-plus  

   #### 先装一下element-plus 的插件  

   ```
   pnpm i element-plus  或者   npm install element-plus --save
   
   pnpm install element-plus @element-plus/icons-vue//这个是图标库
   ```

   

   #### 按照官网全局导入一下element-plus  样式和文件 在main.ts里面导

   

   ```
   import { createApp } from 'vue'
   import App from './App.vue'
   // 引入element-plus的插件与样式
   import ElementPlus from 'element-plus'
   import 'element-plus/dist/index.css'
   // 获取应用实例对象
   const app = createApp(App)
   // 将应用挂载到挂载点上
   app.use(ElementPlus)
   app.mount('#app')
   
   ```

   `

   #### 找个测试样例能正常显示就行 比如button  只要能实现就行

   #### 然后配置国际化的配置 

   ```
   import ElementPlus from 'element-plus'
   import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
   
   app.use(ElementPlus, {
     locale: zhCn,
   })
   ```

   同理再找个样例测一测 如分页器 看组件内部封装的文字是否为中文

   #### 这里有个坑，国际化的中文配置打包会报错  就可以加个文件忽视

   ```
   //@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
   
   import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
   ```

   然后可以试试npm run build 的写法

   ## 1.6  src别名的配置

   在开发项目的时候文件与文件关系可能很复杂，因此我们需要给src文件夹配置一个别名！ 其实这个加上去@就已经生效了

   ```
   // vite.config.ts
   import {defineConfig} from 'vite'
   import vue from '@vitejs/plugin-vue'
   import path from 'path'
   export default defineConfig({
       plugins: [vue()],
       resolve: {
           alias: {
               "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
           }
       }
   })
   ```

   **TypeScript 编译配置**   添加在tsconfig.json中compilerOptions属性上  注意这个ts解析的映射有助于代码补全

   ```
   // tsconfig.json
   {
     "compilerOptions": {
     
       "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
       "paths": { //路径映射，相对于baseUrl
         "@/*": ["src/*"] 
       }
       
     }
   }
   ```

   ## 1.7环境变量的配置

   **项目开发过程中，至少会经历开发环境、测试环境和生产环境(即正式环境)三个阶段。不同阶段请求的状态(如接口地址等)不尽相同，若手动切换接口地址是相当繁琐且易出错的。于是环境变量配置的需求就应运而生，我们只需做简单的配置，把环境状态切换的工作交给代码。**

   开发环境（development）
   顾名思义，开发使用的环境，每位开发人员在自己的dev分支上干活，开发到一定程度，同事会合并代码，进行联调。

   测试环境（testing）
   测试同事干活的环境啦，一般会由测试同事自己来部署，然后在此环境进行测试

   生产环境（production）
   生产环境是指正式提供对外服务的，一般会关掉错误报告，打开错误日志。(正式提供给客户使用的环境。)

   注意:一般情况下，一个环境对应一台服务器,也有的公司开发与测试环境是一台服务器！！！

   项目根目录分别添加 开发、生产和测试环境的文件!  三个文件

   ```
   .env.development
   .env.production
   .env.test
   ```

   文件内容

   ```
   # 变量必须以 VITE_ 为前缀才能暴露给外部读取
   NODE_ENV = 'development'
   VITE_APP_TITLE = '硅谷甄选运营平台'
   VITE_APP_BASE_API = '/dev-api'
   ```

   ```
   NODE_ENV = 'production'
   VITE_APP_TITLE = '硅谷甄选运营平台'
   VITE_APP_BASE_API = '/prod-api'
   ```

   ```
   # 变量必须以 VITE_ 为前缀才能暴露给外部读取
   NODE_ENV = 'test'
   VITE_APP_TITLE = '硅谷甄选运营平台'
   VITE_APP_BASE_API = '/test-api'
   ```

   配置运行命令：package.json

   ```
    "scripts": {
       "dev": "vite --open",
       //主要加这两行
       "build:test": "vue-tsc && vite build --mode test",
       "build:pro": "vue-tsc && vite build --mode production",
       
       "preview": "vite preview"
     },
   ```

   通过import.meta.env获取环境变量

   ### 可以在不同的开发环境下自动的切换 不用频繁的手动切换

   

   ### SVG图标配置

   在开发项目的时候经常会用到svg矢量图,而且我们使用SVG以后，页面上加载的不再是图片资源,

   这对页面性能来说是个很大的提升，而且我们SVG文件比img要小的很多，放在项目中几乎不占用资源。

   **安装SVG依赖插件**

   ```
   pnpm install vite-plugin-svg-icons -D
   ```

   **在`vite.config.ts`中配置插件**

   ```
   //还有这个
   import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
   
   import path from 'path'
   export default () => {
     return {
       plugins: [
       //这个加载数组上
         createSvgIconsPlugin({
           // Specify the icon folder to be cached
           iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
           // Specify symbolId format
           symbolId: 'icon-[dir]-[name]',
         }),
         
       ],
     }
   }
   ```

   ```
   配置完之后长这样
   // vite.config.ts
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   import path from 'path'
   //引入svg需要用到的插件
   import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
   export default defineConfig({
     plugins: [vue(),
       createSvgIconsPlugin({
         // Specify the icon folder to be cached
         iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
         // Specify symbolId format
         symbolId: 'icon-[dir]-[name]',
       }),
     ],
     resolve: {
       alias: {
         '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
       },
     },
   })
   
   ```

   

   

   **入口文件导入** main.ts中导入

   ```
   import 'virtual:svg-icons-register'
   ```

   ```
       <!-- 测试SVG图标使用 -->
       <!-- svg：外层容器节点需要配合着use标签使用 -->
       <svg style="width: 30px; height: 30px;">
         <!-- xlink:href执行用哪一个图标   记得加上#icon-作为前缀 -->
         <!-- use标签的fill属性可以设置图标的颜色 -->
         <use xlink:href="#icon-phone" fill="red"></use>
       </svg>
   ```

   

   #### 1.8 svg封装为全局组件

   因为项目很多模块需要使用图标,因此把它封装为全局组件！！！

   #### **在src/components目录下创建一个SvgIcon组件:代表如下**    svg  封装成组件化

   ```
   <template>
     <div>
       <svg :style="{ width: width, height: height }">
         <use :xlink:href="prefix + name" :fill="color"></use>
       </svg>
     </div>
   </template>
   
   <script setup lang="ts">
   defineProps({
     //xlink:href属性值的前缀
     prefix: {
       type: String,
       default: '#icon-'
     },
     //svg矢量图的名字
     name: String,
     //svg图标的颜色
     color: {
       type: String,
       default: ""
     },
     //svg宽度
     width: {
       type: String,
       default: '16px'
     },
     //svg高度
     height: {
       type: String,
       default: '16px'
     }
   
   })
   </script>
   <style scoped></style>
   ```

   为了防止重复引用 直接注册未全局组件

   #### 在src文件夹目录下创建一个index.ts文件：用于注册components文件夹内部全部全局组件！！！（理解就行  不用操作）

   ```
   // 注册全局组件的SvgIcon
   import SvgIcon from '@/components/SvgIcon/index.vue'
   app.component('SvgIcon',SvgIcon)
   
   ```

   

   ### 为了不让每一个组件都一次次注册 采用自定义插件的形式直接全部引用

   ```
   // 引入项目中全部的全局组件
   import SvgIcon from './SvgIcon/index.vue';
   import type { App, Component } from 'vue';
   // 全局对象
   const components: { [name: string]: Component } = { SvgIcon };
   
   // 对外暴露插件对象
   export default {
       // 务必叫做install方法
       install(app: App){
           // 注册项目全部的全局组件
           Object.keys(components).forEach((key: string) => {
               // 注册为全局组件
               app.component(key, components[key]);
           })
       }
   }
   ```

   ### 并且 在入口文件main.ts引入src/index.ts文件,通过app.use方法安装自定义插件

   ```
   import gloablComponent from './components/index';
   app.use(gloablComponent);
   ```

   ### 1.8 集成sass

   我们目前在组件内部已经可以使用scss样式,因为在配置styleLint工具的时候，项目当中已经安装过sass sass-loader,因此我们再组件内可以使用scss语法！！！需要加上lang="scss"

   ```
   <style scoped lang="scss"></style>
   ```

   接下来我们为项目添加一些全局的样式

   在src/styles目录下创建一个index.scss文件，当然项目中需要用到清除默认样式，因此在index.scss引入reset.scss

   reast.scss可以在这里搜索一下   里面会有默认清除样式的

   ```
   https://www.npmjs.com/package/reset.scss?activeTab=code
   ```

   然后再index.scss这里引入一下

   ```
   @import reset.scss
   ```

   在入口文件引入

   ```
   import '@/styles'
   ```

   但是你会发现在src/styles/index.scss全局样式文件中没有办法使用$变量.因此需要给项目中引入全局变量$.

   在style/variable.scss创建一个variable.scss文件！

   在vite.config.ts文件配置如下:

   ```
   export default defineConfig((config) => {
   	
   	//主要添加这一段
   	// scss全局变量的配置
   	css: {
         preprocessorOptions: {
           scss: {
             javascriptEnabled: true,
             additionalData: '@import "./src/styles/variable.scss";',
           },
         },
       },
       
       
   	}
   }
   ```

   **`@import "./src/styles/variable.less";`后面的`;`不要忘记，不然会报错**!

   配置完毕你会发现scss提供这些全局变量可以在组件样式中使用了！！！

   ### 1.9  安装mock

   ### mock数据  注意安装2.9.8或2.9.6的，3.0有bug

   安装依赖:https://www.npmjs.com/package/vite-plugin-mock

   ```
   npm i  mockjs -S
   ```

   ```
   pnpm install vite-plugin-mock@2.9.8
   ```

   

   ```
   pnpm install -D vite-plugin-mock mockjs//做参考错误的安装
   ```

   在 vite.config.js 配置文件启用插件。

   ```
   import { UserConfigExport, ConfigEnv } from 'vite'
   //重点这句  
   import { viteMockServe } from 'vite-plugin-mock'
   
   import vue from '@vitejs/plugin-vue'
   //这个是箭头函数 并返回配置对象的方法  需要手动改改
   export default ({ command })=> {
     return {
       plugins: [
         vue(),
         //这个是viteMockServe 配置mock只在这里生效
         viteMockServe({
           localEnabled: command === 'serve',
         }),
       ],	
     }
   }
   ```

   在根目录创建mock文件夹:去创建我们需要mock数据与接口！！！

   在mock文件夹内部创建一个user.ts文件

   ```
   //用户信息数据
   function createUserList() {
       return [
           {
               userId: 1,
               avatar:
                   'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
               username: 'admin',
               password: '111111',
               desc: '平台管理员',
               roles: ['平台管理员'],
               buttons: ['cuser.detail'],
               routes: ['home'],
               token: 'Admin Token',
           },
           {
               userId: 2,
               avatar:
                   'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
               username: 'system',
               password: '111111',
               desc: '系统管理员',
               roles: ['系统管理员'],
               buttons: ['cuser.detail', 'cuser.user'],
               routes: ['home'],
               token: 'System Token',
           },
       ]
   }
   
   export default [
       // 用户登录接口
       {
           url: '/api/user/login',//请求地址
           method: 'post',//请求方式
           response: ({ body }) => {
               //获取请求体携带过来的用户名与密码
               const { username, password } = body;
               //调用获取用户信息函数,用于判断是否有此用户
               const checkUser = createUserList().find(
                   (item) => item.username === username && item.password === password,
               )
               //没有用户返回失败信息
               if (!checkUser) {
                   return { code: 201, data: { message: '账号或者密码不正确' } }
               }
               //如果有返回成功信息
               const { token } = checkUser
               return { code: 200, data: { token } }
           },
       },
       // 获取用户信息
       {
           url: '/api/user/info',
           method: 'get',
           response: (request) => {
               //获取请求头携带token
               const token = request.headers.token;
               //查看用户信息是否包含有次token用户
               const checkUser = createUserList().find((item) => item.token === token)
               //没有返回失败的信息
               if (!checkUser) {
                   return { code: 201, data: { message: '获取用户信息失败' } }
               }
               //如果有返回成功信息
               return { code: 200, data: {checkUser} }
           },
       },
   ]
   ```

   #### *安装axios**

   ```
   pnpm install axios
   ```

   最后通过axios测试接口！！！

   

   ```
   // 测试假接口能不能用
   import axios from 'axios'
   //登录接口
   axios({
       url:'/api/user/login',
       method:"post",
       data:{
         username:'admin',
         password:'111111'
       }
   })
   
   ```

   只要密码正确就直接返回token，否则就是错误信息

   ### 1.10  axios二次封装

   在开发项目的时候避免不了与后端进行交互,因此我们需要使用axios插件实现发送网络请求。在开发项目的时候

   我们经常会把axios进行二次封装。

   目的:

   1:使用请求拦截器，可以在请求拦截器中处理一些业务(开始进度条、请求头携带公共参数) ( config.headers.token= token)

   2:使用响应拦截器，可以在响应拦截器中处理一些业务(进度条结束、简化服务器返回的数据、处理http网络错误)

   在根目录下创建utils/request.ts

   ```
   import axios from "axios";
   import { ElMessage } from "element-plus";
   //创建axios实例
   let request = axios.create({
       baseURL: import.meta.env.VITE_APP_BASE_API,
       timeout: 5000
   })
   //请求拦截器
   request.interceptors.request.use(config => {
       return config;
   });
   //响应拦截器
   request.interceptors.response.use((response) => {
       return response.data;
   }, (error) => {
       //处理网络错误
       let msg = '';
       let status = error.response.status;
       switch (status) {
           case 401:
               msg = "token过期";
               break;
           case 403:
               msg = '无权访问';
               break;
           case 404:
               msg = "请求地址错误";
               break;
           case 500:
               msg = "服务器出现问题";
               break;
           default:
               msg = "无网络";
   
       }
       ElMessage({
           type: 'error',
           message: msg
       })
       return Promise.reject(error);
   });
   export default request;
   ```

   ### 

   # 2 搭建基本路由

   安装路由 

   ```
   pnpm install vue-router
   ```

   基本路由  login  404  home  任意路由(指向404)

    先创建views文件夹   然后就是创建一下三个文件夹

   开始就是搭建router文件夹   创建路由器  配置路由

   ```
   //通过vue-router插件实现模板路由配置
   import { createRouter, createWebHashHistory } from 'vue-router'
   import { constantRoute } from './routes'
   //创建路由器
   const router = createRouter({
     //路由模式hash
     history: createWebHashHistory(),
     routes: constantRoute,
     //滚动行为
     scrollBehavior() {
       return {
         left: 0,
         top: 0,
       }
     },
   })
   export default router
   
   ```

   

   然后先写一个静态路由 然后就是暴露出去

   ```
   // 对外暴露配置路由(常量路由)
   export const constantRoute = [
     {
       path: '/login',
       component: () => import('@/views/login/index.vue'),
       name: 'login', //命名路由
     },
     {
       // 登录成功以后展示数据的路由
       path: '/',
       component: () => import('@/views/home/index.vue'),
       name: 'layout', //命名路由
     },
     {
       // 登录成功以后展示数据的路由
       path: '/404',
       component: () => import('@/views/404/index.vue'),
       name: '404', //命名路由
     },
     {
       // 登录成功以后展示数据的路由
       path: '/:pathMatch(.*)*',
       redirect: '/404',
       name: 'Any', //命名路由
     },
   ]
   
   ```

   暴露之后就可以在 app.vue那里放一个<router-view></router-view>

   ```
   <router-view></router-view>  //路由出口
   ```

   ### 2.1 建立store仓库

   ```
   pnpm i pinia  //降低版本可以用 pnpm i pinia@2.0.34
   ```

   创建一个store文件夹  然后在里面创建一个index.ts文件

   ```
   // 建立大仓库
   import {creatsPinia} from 'pinia';
   // 创建大仓库
   let pinia  = creatsPinia
   // 对外暴露：入口文件需要安装仓库
   export default pinia;
   ```

   在入口文件main.ts 注册并使用

   ```
   import pinia from './store'
   
   app.use(pinia)
   
   ```

   在store里面创建小仓库 modeules文件夹 里面创建user.ts用户user的文件

   ```
   //创建用户相关的小仓库
   import { defineStore } from 'pinia'
   // 引入接口
   import { reqLogin } from '@/api/user'
   // 引入数据类型
   import type { loginFrom, loginResponseData } from '@/api/user/type'
   import type { UserState } from './types/type'
   // 引入操作本地存储的工具方法
   import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
   // 创建用户小仓库
   let useUserStore = defineStore('User', {
     // 小仓库存储数据的地方
     state: (): UserState => {
       return {
         token: GET_TOKEN(), //用户唯一标识token
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
     },
     getters: {},
   })
   
   // 对外暴露获取小仓库方法
   export default useUserStore
   
   ```

   对于用户的state类型直接创建type文件夹 type.ts来定义类型

   ```
   // 定义小仓库数据state类型
   export interface UserState {
     token: string | null
   }
   
   ```

   对于api接口有关的类型 写在api ->use->type.ts里面r 

   ```
   // 登录接口需要携带参数ts类型
   export interface loginForm {
     username: string
     password: string
   }
   
   interface dataType {
     token?: string
     message?: string
   }
   
   // 登录接口返回的数据类型
   export interface loginResponseData {
     code: number
     data: dataType
   }
   
   interface userInfo {
     userId: number
     avatar: string
   
     username: string
     password: string
     desc: string
     roles: string[]
     buttons: string[]
     routes: string[]
     token: string[]
   }
   
   // 定义服务器返回用户相关信息的数据类型
   interface user {
     checkUser: userInfo
   }
   
   export interface userResponseData {
     code: number
     data: user
   }
   
   ```

   对于一些工具类的封装可以写在 utils  ->token里面

   ```
   // 封装本地存储数据与读取数据方法
   export const SET_TOKEN = (token: string) => {
     localStorage.setItem('TOKEN', token)
   }
   
   export const GET_TOKEN = () => {
     return localStorage.getItem('TOKEN')
   }
   
   ```

   然后就可以在页面中引用

   ```
   import {useUserStore} from '@/store/modules/user';
   
   const userStore = useUserStore();
   
   //调用里面的异步方法 直接调用
   userStore.userLogin(loginForm)
   ```

   表单校验规则

   ```
   <el-form
         class="login_form"
         //绑定一下一个对象和规则
         :model="loginForm"
         :rules="rules"
         
         ref="loginForms"
       >
   ```

   ```
   //填写校验规则
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
       { trigger: 'change', validator: validatorUserName }
     ],
     password: [
       // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change' }
       { trigger: 'change', validator: validatorPassword }
     ]
   }
   ```

   

   将api调用方法封装在store里面 并通过返回promise对象使得页面获取到信息做出判断

   ### 2.2 token登录 获取用户信息 退出

   ```
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
   ```

   里面的呃state类型在 modules下定义一个types定义

   

   ### 2.3 路由鉴权安装进度条

   ```
   pnpm i nprogress
   ```

   

   ```
    nprogress.start() //表示开始进度条
    nprogress.done() //表示结束进度条
   ```

   路由鉴权

   ```
   //在根目录下编写permisstion.ts文件
   
   
   
   //路由鉴权:鉴权,项目当中路由能不能被的权限的设置(某一个路由什么条件下可以访问、什么条件下不可以访问)
   import router from '@/router'
   import setting from './setting'
   //@ts-ignore
   import nprogress from 'nprogress'
   //引入进度条样式
   import 'nprogress/nprogress.css'
   nprogress.configure({ showSpinner: false })
   //获取用户相关的小仓库内部token数据,去判断用户是否登录成功
   import useUserStore from '@/store/modeules/user'
   import pinia from './store'
   const userStore = useUserStore(pinia)
   //全局守卫:项目当中任意路由切换都会触发的钩子
   //全局前置守卫
   router.beforeEach(async (to: any, from: any, next: any) => {
       document.title = `${setting.title} - ${to.meta.title}`
   //to:你将要访问那个路由
     //from:你从来个路由而来
     //next:路由的放行函数
     nprogress.start()
   
     //获取token,去判断用户登录、还是未登录
     const token = userStore.token
     //获取用户名字
     const username = userStore.username
     //用户登录判断
     if (token) {
       //登录成功,访问login,不能访问,指向首页
       if (to.path == '/login') {
         next({ path: '/' })
       } else {
         //登录成功访问其他路由(登录排除)
         //有用户信息
         if (username) {
           //放行
           next()
         } else {
           //如果没有用户信息,在守卫这里发请求获取到了用户信息再放行
           try {
             //获取用户信息
             await userStore.userInfo()
             //放行
             //万一:刷新的时候是异步路由,有可能获取到用户信息、异步路由还没有加载完毕,出现空白的效果
             next({ ...to })
           } catch (error) {
             //token过期:获取不到用户信息了
             //用户手动修改本地存储token
             //退出登录->用户相关的数据清空
             await userStore.userLogout()
             next({ path: '/login', query: { redirect: to.path } })
           }
         }
       }
     } else {
       //用户未登录判断
       if (to.path == '/login') {
         next()
       } else {
         next({ path: '/login', query: { redirect: to.path } })
       }
     }
   })
   //全局后置守卫
   router.afterEach((to: any, from: any) => {
     nprogress.done()
   })
   
   //第一个问题:任意路由切换实现进度条业务 ---nprogress
   //第二个问题:路由鉴权(路由组件访问权限的设置)
   //全部路由组件:登录|404|任意路由|首页|数据大屏|权限管理(三个子路由)|商品管理(四个子路由)
   
   //用户未登录:可以访问login,其余六个路由不能访问(指向login)
   //用户登录成功:不可以访问login[指向首页],其余的路由可以访问
   
   ```

   ```
   主要通过全局守卫来做鉴权的判断
   //全局前置守卫
   router.beforeEach(async (to: any, from: any, next: any) => {
   	
   })
   
   //全局后置守卫
   router.afterEach((to: any, from: any) => {
   
   })
   ```

   最后在入口文件那里main.ts引入 鉴权文件

   ```
   //注册模板路由
   app.use(router)
   //引入路由鉴权文件
   import './permisstion'
   ```

   ### 2.4  代理跨域   vite工具

    在vite.config.ts

   ```
   //上一个是定义vite的配置   loadEnv是为了加载环境变量的配置
   import { defineConfig, loadEnv } from 'vite'
   
   //mode 表示当前的构建模式，可以式测试环境 开发环境  生产环境
   //process.cwd是表示当前工作目录  一般是指项目的根目录
   let env = loadEnv(mode, process.cwd())
   
   
     // 代理跨域
       server: {
         proxy: {
           [env.VITE_APP_BASE_API]: {
             //获取数据的服务器地址设置
             target: env.VITE_SERVE,
             //需要代理跨域
             changeOrigin: true,
             //路径重写
             rewrite: (path) => path.replace(/^\/api/, ''),
           },
         },
       },
   
   ```

   最后的结果

   ```
   // vite.config.ts
   import { defineConfig, loadEnv } from 'vite'
   import vue from '@vitejs/plugin-vue'
   import path from 'path'
   //引入svg需要用到的插件
   import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
   // mock插件提供方法
   import { viteMockServe } from 'vite-plugin-mock'
   export default defineConfig(({ command, mode }) => {
     let env = loadEnv(mode, process.cwd())
     return {
       plugins: [
         vue(),
         createSvgIconsPlugin({
           // Specify the icon folder to be cached
           iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
           // Specify symbolId format
           symbolId: 'icon-[dir]-[name]',
         }),
         // 这个是保证开发阶段可以使用mock接口
         viteMockServe({
           localEnabled: command === 'serve',
         }),
       ],
       resolve: {
         alias: {
           '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
         },
       },
       // scss全局变量的配置
       css: {
         preprocessorOptions: {
           scss: {
             javascriptEnabled: true,
             additionalData: '@import "./src/styles/variable.scss";',
           },
         },
       },
       // 代理跨域
       server: {
         proxy: {
           [env.VITE_APP_BASE_API]: {
             //获取数据的服务器地址设置
             target: env.VITE_SERVE,
             //需要代理跨域
             changeOrigin: true,
             //路径重写
             rewrite: (path) => path.replace(/^\/api/, ''),
           },
         },
       },
     }
   })
   
   ```

   

   

   

   

   #### 一般来讲配置在vite.config.ts的 只是直接配置在 package写命令，用窗口运行的

   #### 如果不用的话一般是直接写在main.ts注册 然后直接的注册  然后引用使用就行

   

   

   ### 2.6  主页布局

   通过position 决定位置    calc(100% - $top) 决定大小

   ### 2.5 导航菜单搭建  

    先是将常规路由存储到store   然后将store放在  Menu递归菜单组件中即可   注意记得路由写完整不然读不到会报错

   

   ### 2.6 menu图标

   在svg插件里面全局引入element-plus-icon   在路由里配置icon图标   并用 vue自带的

   ```
   <el-icon>
   			//vue自带的
   ​          <component :is="item.meta.icon"></component>
   
      </el-icon>
   ```

   生成图标

   

   ### 2.7 菜单路由跳转 

   用el-menu-item自带的：index获取路径  在用useRouter   中的push做跳转

   ### 2.8 路由切换的动画效果

   ```
   <template>
     <router-view v-slot="{ Component }">
       <transition name="fade">
         <component :is="Component"></component>
       </transition>
     </router-view>
   </template>
   
   <style scoped>
   /*动画效果 淡入淡出  并且有小到大 */
   .fade-enter-from {
     opacity: 0;
     transform: scale(0);
   }
   
   .fade-enter-active {
     transition: all 0.3s;
   }
   
   .fade-enter-to {
     opacity: 1;
     transform: scale(1);
   }
   </style>
   
   
   ```

   

   ### 2.9 路由默认选中

   路由默认选中当前的路径下的菜单item

   

   ### 2.10  搭建顶部taber

   左侧的面包屑和右侧的状态栏的静态搭建  

   左边面包屑已经可以正常跳转

   

   ### 2.11  菜单折叠  

   通过&.fold来实现样式的修改的一种方法    用pinia做状态管理用来各个组件之间的通讯

   

   logo 和 导航栏 以及body  用&.fold   做样式切换  用pinia做一个状态管理  

   ```
   //菜单用 el-menu  做一个菜单折叠
   :collapse="LayOutSettingStore.fold?true:false" 
   ```

   ### 2.12 面包屑的动态展示

   其实就直接获取匹配当前的路由信息即可即可

   $route.matched  这个可以将当前的路由信息匹配的变成一个对象

   

   ### 2.13  组件刷新 

   本质上是v-if的false进行销毁  然后用true进行回复  从而达到刷新的效果   中途用pinia做状态管理

   

   ### 2.14 全屏切换

   

   采用的是dom元素操作的方式  先获取当前的状态  根据状态做操作

   ```
   //全屏按钮点击的回调
   const fullScreen = () => {
     //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,不是全屏:false]
     let full = document.fullscreenElement;
     //切换为全屏模式
     if (!full) {
       //文档根节点的方法requestFullscreen,实现全屏模式
       document.documentElement.requestFullscreen();
     } else {
       //变为不是全屏模式->退出全屏模式
       document.exitFullscreen();
     }
   }
   ```

   

   ### 2.15 获取用户信息

   主页获取用户信息  并且将用户信息存储的pinia里方便状态管理

   路由前置守卫在跳转之前直接做判断   如果有token没用户信息就直接获取用户信息 如果没有token就直接跳转登录页面

   将获取到的用户信息放到pinia里面去  然后将其赋值给导航栏组件

   

   ### 2.16 退出登录 以及登录重定向

   前者 如果有真实的接口的话是应该发请求  然后清楚浏览器中以及pinia状态管理中的token 用户信息之类的

   但是现在没有  所以采取的是直接清楚浏览器中以及pinia里的token   以及在添加一个路由跳转的登录首页

   

   ### 2.17 路由鉴权 进度条效果 

   用全局的前置守卫   创建一个鉴权的js文件 permisstion.ts   然后在main.ts入口文件中引用 import './permisstion'

   进度条效果  npm i nprogress   

   npm官网的nprogress的进度条的安装或者使用

   

   然后是用法

   ```
   //@ts-ignore
   
   import nprogress from 'nprogress'
   
   //引入进度条样式
   
   import 'nprogress/nprogress.css'  //修改样式的话直接在·  做修改
    
   nprogress.configure({ showSpinner: false })
   
   
   //跳转之前启动进度条的加载 前置路由守卫中
   nprogress.start()
   
   //跳转之后启动进度条停止  后置路由守卫中
   nprogress.done()
   ```

   

   ### 2.18 路由鉴权

   做判断  跳转的时候 判断有没有token  如果有token的时候有没有用户信息获不获取

   

   另一个就是用document.title  设置页面窗口的标题   为了可以动态设置就直接在setting在那里面设置变量

   

   

   ### 2.19 将mock里面的接口数据替换为真实的接口   

   

   首先一个更改env环境域名 第二个是做一下代理vite.config.ts里面做一下代理  第三个是做一下请求路径和类型的替换  

   第四个pinia里面的请求方法做个async await处理   第五个就是在对应的调用里面也做一个async await处理  不然的话请求没法玩就会处理下一步 

   定义请求的 ts 类型  并给请求响应的做一个ts类型

   

   ### 2.20 品牌管理的静态搭建

   注意对element-plus的理解  以及默认插槽和具名插槽的理解

   静态直接用elementplus来快速搭建

   在页面封装一个方法用来请求地址的

   

   然后就是请求方法的复用   切换页面  切换条数  初始化

   

   ### 2.21  搭建弹窗页面

   先搭建静态   对element-plus的理解  

   

   图片上传使用的是 el-upload   并且使用action  做代理的路径

   用api的缘故是为了方便本地服务器proxy做代理

   文件的上传之前的钩子是为了可以做类型或者大小限制之类的

   

   添加与修改 公用一个接口 

   共用一个弹窗   发请求的时候通过id来判断调用修改还是添加接口  同理成功弹窗也是id判断

   

   表单的自定义及校验规则 

   :model=  校验的数据   :rules 校验规则

   el-form-item   :props  = 校验的属性

   

   

   script  里面定义一下表单校验规则 rules  tmName：[{required:true,trigger:'blur',validator:validatorTmName}]

   校验方法  validatorName=(rule:any;value:any,callBack:any) 自定义的表单校验的功能

   

   form调用规则的时机   ref='formRef'   用于捕获表单   来发起表单校验事件  因为有些非表单元素不能自动触发  所以在提交之前来一次 全部调用

   

   表单检验事件是一个异步方法  所以可以使用await

   

   关闭弹窗清理数据   也要清理校验报错  

   ```
   第一种
   
    formRef.value?.clearValidate('tmName')   判断是否有该属性的校验规则的错误提示信息 有就清除掉
   
   第二种
   
   nextTick(()=>{
   
    formRef.value.clearValidate('tmName')
   
   })
   ```

   

   删除

   删完之前 判断一下是只有一条吗？如果只有一条就直接返回上一页  如果没有就直接这一页

   

   增删改查业务

   

   

   ### 2.22 继续增删改查的业务  属性管理模块

   静态搭建   

   另外就是

    业务的实现  仓库里面发起一级分类的数据，再把id存起来

   三级分类是通过  选择拿id的时候获取数据   pinia做数据状态管理 

   

   当选择一级分类的时候清空三级分类 并且将数据清空  

   通过c3id来决定  是否展示属性

   

   ### 2.23 三级分类Id

   #### watch的用法   

   ```
   watch(()=> categoryStory.c3Id,()=>{
   	getAttr()
   })
   ```

   

   ```
   // 一个是遍历到的属性  index是唯一标识
   <template #="{row, $index}"  ></template>
   
   
   ```

   

   具名插槽

   slot插槽

   

   提交业务就直接将数据收集起来就行

   

   编辑模式与查看模式的切换   v-show  加上push一个属性做一个切换即可

   

   ```
   @click ="toEdit(row)"   
   ```

   

   

   ### 2.24 添加属性做判断

   失去焦点时做一个   数据校验   并且做一个   编辑模式与查看模式的切换 

      属性的值不能为空    属性的值不能为重复   

   保存按钮 的属性为空判断

   

   聚焦事件的判断 

    ref捕捉Dom节点  然后用传进来的下标做判断  用el-input自带的方法进行聚焦      用下标做判断    用nextTick  做响应式数据更新完之后的判断

   

   nextTick(()=>{

   inputArr.value[$index].focus()

   })

   

   

   直接赋值 挥着 用Object.assign   拷贝的是一个浅拷贝   拷贝的是一个指针  当其中一个改变的时候初始的值也会被修改

   ```
   //深拷贝的一个方法  用JSON.parse方法进行拷贝
   Object.assign(attrParams,JSON.parse(JSON.stringify(row))) 
   
   
   ```

   

   

   删除功能 直接写

   

   然后就是注意一下组件销毁的时候清空仓库的方法

   categoryStore.$reset()     // 清空仓库的数据

   

   ### 2.25 spu

   静态搭建

   

    组件直接的传值 如果对实时性有要求 直接使用事件回调  就是   通过自定义事件的方法抵用$emit

   

   ```
   //父组件的调用子组件   
   <compontant   @changeSence="changeScene"> </compontant>
   
   <script>
   
   const changeSence=()=>{
   
   }
   
   </script>
   
   
   
   //子组件中
   
   //声明父组件定义的子组件的自定义方法
   let $emit = defineEmits(['changeScene'])
   
   //通拓方法调用
   const cacel=()=>{
     $emit('changeSence',0);
   }
   
   
   ```

   子组件调用父组件的方法   

   

   修改表单的时候记得将数据赋值回去  没有的记得发送请求获取用于展示

   

   

   ```
   //通过获取组件的Dom节点  调用Dom节点的方法来抵用子组件的方法
   
   
   //父组件调用子组件的方法
   
   <compomtant ref="spu"  ></compontant>
   
   <script>
   let spu = ref<any>()
   
   ()=>{
   	spu.value.initHasSpuDate()
   }
   </script>
   
   //子组件
   
   const initSkuData = (spu:SpuDate)=>{
   	
   }
   
   defineExpose({initSkuData})
   
   ```

   

    对接口请求类型的  和请求返回类型数据的定义

   有些请求接口类型可以重复定义的  用集成  专注于data里面的类型定义

   

   至于请求类型的数据的  可以复用   这时候用？ 或者用||  书的请求的类型可以重复的利用

   

   然后就是v-for做数据回显  用:value 先是已经存在的值

   v-module展示一些简单的双向绑定数据

   

   

   el-uoload  里面的action  请求记得使用    action="/api/admin/product/fileUplodd"

   要实现的效果 可以提前看一下  对应的属性和样例

   

   上传的图片 可以用钩子先约束一下类型 ，大小

   

   element-plus  插槽  <template #="{row,$index}"  >

   用这个实现复杂表格的增删改

   ```
   //计算属性  就是将过滤器 和 数据的every方法回调做判断
   
   第一个filter遍历的是 全部的商品属性  如果返回的是true 就将属性添加上去
   
   然后第二层是计算没有的属性  然后就是如果 所有属性都判断一遍  其中一个不相等就是false 就直接不添加上去
   
   所以其实是双重for
   
   ```

   

   ![image-20231006153154758](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231006153154758.png)

   

   通过选择的时候收集一下  选项的id和名字  

   ![image-20231006154809161](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231006154809161.png)![image-20231006154427939](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231006154427939.png

   

   然后用 v-module将值传给 script     

   

   后面通过添加的回调方法将选项的值带给表格中添加

   ![image-20231006155021965](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231006155021965.png)

   先将数据通过split将数据切割成对象  然后将数据修改成想要的格式  追加到表格数据中

   插槽数据添加时  ![image-20231006155951917](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231006155951917.png)

   直接就是在row 追加数据 然后将他整理一下 放到需要上传的数组上去即可

   

   ![image-20231006160214831](F:\青训\青训前端开发文档\image-20231006160214831.png)

   @blur 表单元素失去焦点之后的数据回调

   ![image-20231006160421459](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231006160421459.png)

   失去焦点之后直接就是做一个数据追加的在row原数组里面去做展示

   并且在这里做一个已成添加的报错校验 为空 或者重复的时候 

   

   删除属性 就直接 @close="row.saleAttrValueList.splice(index,1)"  然后就是点击删除一个对应的属性值

   

   ![image-20231006163806187](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231006163806187.png)

   上传图片采取的是远程图片的地址上传的方式   如果是型添加的就将返回的响应的图片data放上去 如果是已有的就直接的放url

   ![image-20231006164011627](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231006164011627.png)

   请求保存成功之后  清空 返回切换页面 重新获取初始化数据

   

   ##### 写一个固定的表单   然后使用父组件调用子组件的方法实现  添加表单和修改表单的数据 公用一个表单的清楚

   修改表单就直接将一些数据赋值给表单  并且一些已有属性需要通过id去获取到   这些方法通过父组件调用子组件的方法实现(获取子组件的DOM，然后调用其中的方法)

   另一种就直接去清空上一次留下的数据   并且还有一个就是获取一些需要获取的事

   

   添加成功之后继续将数据重新获取一下 

   

   子组件调用的父亲  是修改保存成功还是添加保存成功   然后用的是$emit('changeSence',{flag:0,params:SpuParams.value.id?'update':'add'})

   通过传参数来判断是否留在当前页还是其他页 添加就直接初始化第一页   修改就留在当前页

   

   sku 对其中具体的商品 属性追加定义

    el-form 中其中的 item  可以继续嵌套 el-form 其中的一个属性 :inline="true" 允许水平放

    

   调用子组件方法  先用  ref 在template捕获  然后在  script里面声明调用方法

   子组件的话  写一个方法  然后使用 defineExpose({  }) 暴露出去

   

   一些id之类的参数 通过父传子

   

   ##### 表单数据 绑定

   

   一般的表单输入框数据 用v-module绑定  获取到数据  

   表单选择框 el-select 绑定一个 v-module  然后其中的 el-option   :value=`${item.id}:${attrValue.id}`  将收集到的数据放在v-module中   

   意思是将选中的时候将item.id和attrValue.id一起放到v-module中    这里绑定的属性可以是一开始获取到的异步对象中  最后在整理出来就行

   表单嵌套表单数据  也是一样操作

   

   、

   ##### 事件和方法

   ![image-20231006211231013](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231006211231013.png)

   

   方法一般是内置的 就可以直接调用里面的api即可  而事件需要自己绑定实现

   

   ![image-20231006212433907](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231006212433907.png)

   

   就将六个选择框里的数据分别做操组 最后将数据合成一个数组对象  返回

   

   ````
   在 JavaScript 中，`reduce()` 是数组对象的内置方法之一。它可以用来对数组中的所有元素执行一个指定的函数，然后将结果累积为单个值。这个方法接受一个回调函数作为参数，这个回调函数可以接受四个参数：累积值（通常命名为 `prev`）、当前元素（通常命名为 `next`）、当前索引和数组本身。
   
   下面是 `reduce()` 方法的基本语法：
   
   ```javascript
   array.reduce(function(prev, next, index, array) {
     // 在这里执行操作
   }, initialValue);
   ```
   
   - `prev`：上一次回调函数的返回值（或者初始值 `initialValue`，如果提供的话）。
   - `next`：当前数组元素的值。
   - `index`：当前数组元素的索引。
   - `array`：调用 `reduce()` 方法的数组本身。
   
   `reduce()` 方法通常用于将数组的元素合并为一个值，例如计算数组元素的总和、找到数组中的最大值等等。这个方法的返回值是累积的结果。
   
   **例子 1：计算数组元素的总和**
   
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const sum = numbers.reduce(function(prev, next) {
     return prev + next;
   }, 0);
   
   console.log(sum); // 输出：15
   ```
   
   在这个例子中，`reduce()` 方法将数组中的所有元素相加，初始值为 `0`，最终返回的结果是数组元素的总和。
   
   **例子 2：查找数组中的最大值**
   
   ```javascript
   const numbers = [10, 5, 8, 3, 1];
   const max = numbers.reduce(function(prev, next) {
     return Math.max(prev, next);
   }, numbers[0]);
   
   console.log(max); // 输出：10
   ```
   
   在这个例子中，`reduce()` 方法用于找到数组中的最大值。`Math.max(prev, next)` 用于比较两个数的大小，返回较大的那个数。
   
   需要注意的是，`reduce()` 方法可以接受一个可选的初始值 `initialValue`。如果提供了初始值，则 `prev` 在第一次调用回调函数时会等于这个初始值，否则 `prev` 会等于数组的第一个元素。如果数组为空且没有提供初始值，会抛出一个错误。
   ````

   

   展示 就直接拿着id查数据  然后将数据展示在表格之中

   

   ### 2.26 sku搭建

   #####  静态搭建

   先是静态大搭建  card + table+分页器

   里面就直接 加插槽 + el-button 即可

   

   分页器 选条数 和选页数要分别写两个方法

   @current-change="getHasSku" 选择页数

      @size-change="handler" 选择条数

   

   ```
   <el-pagination
   
      v-model:current-page="pageNo"
   
      v-model:page-size="pageSize"
   
      :page-sizes="[10, 20, 30, 40]"
   
      :background="true"
   
      layout="prev, pager, next, jumper,->,sizes,total"
   
      :total="total"
   
      @current-change="getHasSku"
   
      @size-change="handler"
   
     />
   
   
   这段代码是在Vue.js应用程序中使用Element UI的分页组件。它设置了分页组件的各种属性和事件监听器。让我为你解释一下代码：
   
   1. `v-model:current-page="pageNo"`: 这将`pageNo`变量与分页组件的当前页绑定在一起。
   2. `v-model:page-size="pageSize"`: 这将`pageSize`变量与分页组件中每页显示的项目数绑定在一起。
   3. `:page-sizes="[10, 20, 30, 40]"`: 这设置了一个下拉菜单，允许用户从给定的数组中选择不同的页大小。
   4. `:background="true"`: 这设置分页组件具有背景。
   5. `layout="prev, pager, next, jumper,->,sizes,total"`: 这定义了分页组件的布局，包括上一页、页码、下一页按钮，跳转输入框，选择页大小的下拉菜单，以及总项目数。
   6. `:total="total"`: 这将`total`变量与需要分页的项目总数绑定在一起。
   7. `@current-change="getHasSku"`: 这为`current-change`事件设置了一个事件监听器，当当前页改变时，会调用Vue实例中的`getHasSku`方法。
   8. `@size-change="handler"`: 这为`size-change`事件设置了一个事件监听器，当页大小改变时，会调用Vue实例中的`handler`方法。
   
   确保你在Vue组件中定义了相应的方法（`getHasSku`和`handler`），以处理这些事件。同时，确保`pageNo`、`pageSize`和`total`变量在你的Vue数据中声明，以便正确地将分页组件与你的数据绑定在一起。
   ```

   v-model:current-page="pageNo"   双向绑定数据可以自动更新

   :current-page="pageNo"  知识绑定数据

   

   ##### 抽屉 

   因为没用表单只是展示  所以使用  layout 布局一下位置

   

   

   ##### 对于pinia中的store的使用

     本质上就是一个状态管理   如果不需要保存值 传值复用

   只是在当前页面的调用的话 就直接  api那里创建一下类型  创建一下接口的请求函数  然后引用使用即可

   如果需要频繁的调用  或者说做一些请求后的数据处理什么的如本地储存的复杂业务之类的可以考虑将其放在store那里做一下复杂的处理

   ### 3  用户管理模块

   ### 3.1 用户管理静态搭建 

   label 表格头内容   prop 内容   placeholder 另一种占位符 

   一个card 加表单  一个card  button + table +分页器

   

   清空数组 Object.assign(userParams,{username:'',name:'',password:''})  将右边的对象赋值给左边的对象  右边是空的  所以是清空数组的意思

   ```
   
   //表单的检验规则
   
   el-form     ：rules="rules"   表单的检验规则
   
   
   
   //表单的检验规则对象
   
   const  rules = {
   
     username:[{required:ture , trigger:'blur',validator:  validatorUsername }]
   
   }
   
   
   //表单检验名字的回调函数   rule 规则  value 表单内容  callback  回调函数 方向
   const  validatorUsername = (rule:any,value:any,callBack:any)=>{
   
   	if(value.trim().length>=5){
   	callBack();
   	}
   	else{
   	callBack(new Error('用户昵称至少五位'))
   	}
   } 
   ```

   ##### 表单检验

   ```
   获取form组件的实例  template ref  在script定义一个ref
   
   然后调用  await   formRef.value.validate()    调用form内置的方法  触发时机可以在保存的时候 进行一次表单检验
   ```

   

   ##### 清空校验规则

   ```
   每次点击添加的时候进行表单的校验信息的清空
   
   等数据加载完毕之后再清楚校验信息
   
   nextTick(()=>{
   
   formRef.value.clearValidate('username')
   
   formRef.value.clearValidate('name')
   
   formRef.value.clearValidate('password')
   
   })
   
   
   ```

   

   浏览器自动刷新一次

   window.location.reload()   让刷新触发重新获取用户信息 来判断是否修改了是当前的用户名

   重新获取到第一页

   ##### ：label 收集的信息

   复选框收集的信息是直接 用数组收集

   全选全部选实现  就直接将数据覆盖到数组上即可

   ```
     <el-checkbox
               @change="handleCheckAllChange"
               v-model="checkAll"
               :indeterminate="isIndeterminate"
             >
               全选
             </el-checkbox>
             <!-- 显示职位的的复选框 -->
             <el-checkbox-group
               v-model="userRole"
               @change="handleCheckedCitiesChange"
             >
               <el-checkbox
                 v-for="(role, index) in allRole"
                 :key="index"
                 :label="role"
               >
                 {{ role.roleName }}
               </el-checkbox>
   ```

   

   

   v-model="userRole"  表示绑定双向绑定的数据  也是复选框收集数据的放置处    ：label是选中收集的职位

   

   ```
    <!-- table展示用户信息 -->
       <el-table
       //这个选中时候触发的事件
         @selection-change="selectChange"
         
         style="margin: 10px 0px"
         border
         :data="userArr"
       >
       
       </el-table>
   
   
   //table复选框勾选的时候会触发的事件
   const selectChange = (value: any) => {
     selectIdArr.value = value
   }
   ```

   ##### 这个功能会使选中的时候将 选中的对象收集起来

   

   点击批量删除的时候 筛选一下 对象里的属性

   ```
   const idArray = selectIdArr.value.map(item => {
       return item.id;
   });
   
   //遍历数组将数据 放在一个数组里返回
   ```

   

   搜索功能也是同一个请求

   只不过赋值一下 keyword 这个

   

   重置也是一个刷新按钮   用v-if销毁  销毁之后再设置成true然后出来

   

   ##### 树形控件

   静态通过默认的api展示

   

   已经拥有过的属性  先是url   获取数据  然后将数据筛选一下  将数据存在并且数据四级的地方筛选出来  如果不是要的那级就直接就是递归一下  继续调用

   ```
   const filterSelectArr = (allData: any, initArr: any) => {
     allData.forEach((item: any) => {
       if (item.select && item.level == 4) {
         initArr.push(item.id)
       }
       if (item.children && item.children.length > 0) {
         filterSelectArr(item.children, initArr)
       }
     })
   
     return initArr
   }
   
   ```

   然后将筛选的返回的数组 保存一下 绑定到树形控件中

   ```
   <el-tree
           ref="tree"
           :data="menuArr"
           show-checkbox
           node-key="id"
           default-expand-all
           //将获取到的数据绑定一下
           :default-checked-keys="selectArr"
           
           :props="defaultProps"
         />
   
   ```

     

   

   获取被选中的id的  用内置的api

   先是捕捉一下 tree节点  然后就是通过terr.value.api 调用一下  getCheckedKeys()获取选中的节点Id     getHalfCheckedKeys()获取半选状态下的id

   

   let permissionId = arr.concat(arr1)   将两个数组合并成一个数   组

   

   ##### 事件与方法

   事件指的是  <template> 里面的鹅  @后面的东西   @click   这个指的是点击事件     @current 指的是自定义事件    后面写的是自定义事件方法  script里面的

   

   row-key  表示的是树状表格控制的id形式 

   

   input  绑定一个v-module

   

   ### 基本的业务流程  权限管理

   先添加一个用户 然后分配角色									定义用户  给用户分配角色

   角色选项是由角色管理进行控制  对权限进行分配   定义角色 给角色分配权限

   然后菜单展示需要的权限是由菜单管理控制的		定义菜单   分配菜单需要的权限

   

   ##### element-plus组件不能使用弹性布局？ 外层套一个div就行

   

   ### 3.2 首页添加

   搭建个静态  将数据放进去

   背景图片采用svg图片  将svg图片用封装好的组件传用一下字符串   即可正常显示 

   

   ### 3.3 主题的静态搭建

   取色器 听用组件封装好二点直接引用即可

   黑暗模式的静态搭建  用switch  

   

   element-plus 支持暗黑模式  只要在main.ts里面引入一下暗黑模式用的样式    然后在控制开关上使用dom操作即可

   

   ```
    const html = document.documentElement
    
    //黑暗模式
    
    dark.value ? (html.className = 'dark') : (html.className = '')
   ```

   

   ```
   let html = document.documentElement  
   
   //替换按钮样式
   
    html.style.setProperty('--el-color-primary', color.value)
   
   获取一下页面的dom元素   然后  将其中的元素的替换一下
   ```

   

   ## 4 数据大屏

   ### 4.1 适配问题

   ```
   1 vw，vh
   
   2 用scale 来解决数据大屏  
   
   
   
   先上一个背景图片 用vw，vh解决
   
      位置
   
   然后使用 position：fixed 固定一下  
   
   并使用
   transform-origin: left top;
           left: 50%;
           top: 50%;
    移动一下中心点   使得居中在背景图上
    
   ```

   ```
    
    
    大小
    
    根据比例 放大缩小一下 
    
    
    //控制数据大屏放大与缩小
     let box = document.querySelector('.box')
     box.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
     //计算缩放的比例啦
     function getScale(w = 1920, h = 1080) {
       const ww = window.innerWidth / w
       const wh = window.innerHeight / h
       return ww < wh ? ww : wh
       //ww<wh情况: 1920/1920(ww)   1080/1080(wh)
       //ww>wh情况:1920/1920(ww)   1080/1080(wh)
       
       //谁在变小就用谁铺满 小的铺满
       
     }
   
   // 监听一下变化
     window.onresize = () => {
       box.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
     }
   ```

   

   ### 4.2  静态搭建

   先写一个静态图

   

   vue中获取dom节点    可以使用 ref来获取dom元素

   然后使用

   ```
   //获取数据大屏展示内容盒子的DOM元素
   let screen = ref()
   onMounted(() => {
     screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
   })
   //定义大屏缩放比例
   function getScale(w = 1920, h = 1080) {
     const ww = window.innerWidth / w
     const wh = window.innerHeight / h
     return ww < wh ? ww : wh
   }
   //监听视口变化
   window.onresize = () => {
     screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
   }
   ```

   

   ##### scale  第一个参数是用来放大的比例  第二个参数 是移动的比例

   

   里面的小组件的话  用  flex 直接定位置就行

   display flex   里面的位置  可以用flex：1   flex：2 来站一波位置

   

   ```
   //动态时间插件   
   pnpm i moment
   
   ```

   ##### 动态时间

   ```
   //动态获取时间使用 通过定时器 循环的获取赋值
   import { ref, onMounted, onBeforeUnmount } from 'vue'
   
   
   import moment from 'moment';
   
   //存储当前时间
   let time = ref(moment().format('YYYY年MM月DD日 hh:mm:ss'))
   let timer = ref(0)
   
   onMount(()=>{
   timer.value=setTinerval(()=>{
   time.value = moment().format('YYYY年MM月DD日 hh:mm:ss')
   },1000)
   })
   
   onBeforeUnmount(()=>{
   clearInterval(timer.value)
   })
   
   ```

   

   静态搭建 先是做一个布局

   ```
   .left{
   	height:1040px;
   	display:flex;
   	//竖直方向布局
   	flex-direction:colum;
   	
   	.tourist{
   		flex:1.5;
   	}
   	
   	.sex{
   		flex:1;
   	}
   	
   	.age{
   		flex:1;
   	}
   
   }
   
   ```

   

   用好浮动  可以在同一个位置 左右移动

   ### 4.3 echart 图搭建 

   注意就是有些echart图是另外扩展的得另外装插件才行的

   ![image-20231008221703661](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231008221703661.png)

   

   一般的图 可以直接引用

   ```
   
   import * as echarts from 'echarts'
   
   //获取节点
   
   let charts= ref();
   
   //用生命周期的钩子  进行echarts图绘制
   onMounted(()=>{
   	//获取ecarts类的实例
   	let mychats = echarts.init(charts.value)
   	//设置实例的配置项
   	mycharts.setOption({
   		//标题组件
   		title:{
   		text:'水球图'
   		},
   		//x轴组件
   		xAxis:{},
   		yAxis:{},
   		//系列:决定你战士什么样的图形图标
   		series:{
   			type:‘bar',
   			data:[10,20,30,40]
   		},
   		//布局组件
   		grid:{
   			left:0,
   			right:0,
   			top:0,
   			bottom:0
   		}
   		
   	})
   	
   })
   
   
   
   ```

   

   ### 4.4 水晶图

   特殊的图得分别安装

   ```
   //水球图的官网
   
   npm i echarts-liquidfill
   ```

   

   ```
   // 使用
   
   import 'echarts-liquidfill'
   import * as echarts from 'echarts'
   
   
   //一些配置
   
     mycharts.setOption({
       //标题组件
       title: {
         text: '水球图',
       },
       //x|y轴组件
       xAxis: {},
       yAxis: {},
       //系列:决定你展示什么样的图形图标
       series: {
         type: 'liquidFill', //系列
         data: [0.6, 0.4, 0.2], //展示的数据
         waveAnimation: true, //动画
         animationDuration: 3,
         animationDurationUpdate: 0,
         radius: '100%', //半径
         outline: {
           //外层边框颜色设置
           show: true,
           borderDistance: 8,
           itemStyle: {
             color: 'skyblue',
             borderColor: '#294D99',
             borderWidth: 8,
             shadowBlur: 20,
             shadowColor: 'rgba(0, 0, 0, 0.25)',
           },
         },
       },
       //布局组件
       grid: {
         left: 0,
         right: 0,
         top: 0,
         bottom: 0,
       },
     })
   
   ```

   

   ### 4.5 条形图

   

   ```
   xAxis:{
   	show:false  //隐藏
   },
   yAxis:{
   	show:false,
   	type:'category' //表示的是在y轴分布
   },
   series:[
   	{
   		type:'bar',
   		data:[100],//数据
   		barWidth:20 //柱状图的宽度
   		z: 100,//表示z轴的层级
   		 itemStyle: {
             color: 'skyblue',
             borderRadius: 20,//设置一个圆角样式
           },
   	},
   	{
   		type:'bar',
   		data:[42],/数据
   		barWidth:20 //柱状图的宽度
   		//调整柱状图的位置
   		barGap: '-100%',
           itemStyle: {  //调整样式
             color: 'pink',
             borderRadius: 20,
           },
   	},
   	
   ]
   ```

   ### 4.6 饼图

   ```
   legend  表示的是图例的位置
   
   
    //设置配置项
     let option = {
       tooltip: {
         trigger: 'item',
       },
       legend: {
         right: 30,
         top: 40,
         orient: 'vertical', //图例组件方向的设置
         textStyle: {
           color: 'white',
           fontSize: 14,
         },
       },
       series: [
         {
           name: 'Access From',
           type: 'pie',
           radius: ['40%', '70%'],
           avoidLabelOverlap: false,
           itemStyle: {
             borderRadius: 10,
             borderColor: '#fff',
             borderWidth: 2,
           },
           label: {
             show: true,
             position: 'inside',
             color: 'white',
           },
   
           labelLine: {
             show: false,
           },
           data: [
             { value: 1048, name: '军事' },
             { value: 735, name: '新闻' },
             { value: 580, name: '直播' },
             { value: 484, name: '娱乐' },
             { value: 300, name: '财经' },
           ],
         },
       ],
       //调整图形图标的位置
       grid: {
         left: 0,
         top: 0,
         right: 0,
         bottom: 0,
       },
     }
   
   ```

   

   

   ##### echart 国内的镜像官网

   https://echarts.apache.org/zh/index.html

   

   ### 4.7 地图组件

   阿里云的json文档

   http://datav.aliyun.com/portal/school/atlas/area_selector

   

   需要注册一下JSON文件才能使用

   ```
   赋值阿里云的json文件
   在项目下创建从一个  china.json文件
   
   然后使用时 将文件引用  并且子注册一下
   import chinaJSON from './china.json'
   
   //注册中国地图
   echarts.registerMap('china', chinaJSON as any)
   
   
   剩下的 就是挂载调整配置绘制一下地图
   ```

   

   ```
   //设置配置项
     mychart.setOption({
       //地图组件
       geo: {
         map: 'china', //中国地图
         roam: true, //鼠标缩放的效果
         //地图的位置调试
         left: 150,
         top: 150,
         right: 150,
         zoom: 1.2,
         bottom: 0,
         //地图上的文字的设置
         label: {
           show: true, //文字显示出来
           color: 'white',
           fontSize: 14,
         },
   
         itemStyle: {
           //每一个多边形的样式
           color: {
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0,
             y2: 1,
             colorStops: [
               {
                 offset: 0,
                 color: 'red', // 0% 处的颜色
               },
               {
                 offset: 1,
                 color: 'blue', // 100% 处的颜色
               },
             ],
             global: false, // 缺省为 false
           },
           opacity: 0.8,
         },
         //地图高亮的效果
         emphasis: {
           itemStyle: {
             color: 'red',
           },
           label: {
             fontSize: 40,
           },
         },
       },
       //布局位置
       grid: {
         left: 0,
         top: 0,
         right: 0,
         bottom: 0,
       },
       series: [
         {
           type: 'lines', //航线的系列
           data: [
             {
               coords: [
                 [116.405285, 39.904989], // 起点
                 [119.306239, 26.075302], // 终点
               ],
               // 统一的样式设置
               lineStyle: {
                 color: 'orange',
                 width: 5,
               },
             },
             {
               coords: [
                 [116.405285, 39.904989], // 起点
                 [114.298572, 30.584355], // 终点
               ],
               // 统一的样式设置
               lineStyle: {
                 color: 'yellow',
                 width: 5,
               },
             },
           ],
           //开启动画特效
           effect: {
             show: true,
             symbol: 'arrow',
             color: 'black',
             symbolSize: 10,
           },
         },
       ],
     })
   ```

   

   

   svg图标 可以使用   阿里图标   找到放进去即可

   ```
   x轴均匀分布
   
   xAxis:{
   	type :'category', // x轴均匀分布
   	boundaryGap:false,//两侧是否留白
   	splitLine:{ //分割线设置
   	  show:false
   	}
   	
   	// 轴线的设置
   	axisLine:{
   		show:true
   	},
   	//刻度
   	axisTick:{
   		show:true
   	}
   	
   }
   
   
   series:[{
   	type:'line',
   	data:[0,120,140],
   	smooth:true,//平滑曲线的设置
   	areaStyle:{
   		color"
   	}
   }]
   ```

   

   ### 4.8 多种类型的echart公用一个容器

   ```
   series:[{
   
   },{
   
   }]
   //直接在系列里面加上想要放的图形即可
   
   ```

   ```
     mychart.setOption({
       //标题组件
       title: {
         //主标题
         text: '景区排行',
         link: 'http://www.baidu.com',
         //标题的位置
         left: '50%',
         //主标题文字样式
         textStyle: {
           color: 'yellowgreen',
           fontSize: 20,
         },
         //子标题
         subtext: '各大景区排行',
         //子标题的样式
         subtextStyle: {
           color: 'yellowgreen',
           fontSize: 16,
         },
       },
       //x|y轴组件
       xAxis: {
         type: 'category', //图形图标在x轴均匀分布展示
       },
       yAxis: {},
       //布局组件
       grid: {
         left: 20,
         bottom: 20,
         right: 20,
       },
       //系列:决定显示图形图标是哪一种的
       series: [
         {
           type: 'bar',
           data: [10, 20, 30, 40, 50, 60, 70],
           //柱状图的:图形上的文本标签，
           label: {
             show: true,
             //文字的位置
             position: 'insideTop',
             //文字颜色
             color: 'yellowgreen',
           },
           //是否显示背景颜色
           showBackground: true,
           backgroundStyle: {
             //底部背景的颜色
             color: {
               type: 'linear',
               x: 0,
               y: 0,
               x2: 0,
               y2: 1,
               colorStops: [
                 {
                   offset: 0,
                   color: 'black', // 0% 处的颜色
                 },
                 {
                   offset: 1,
                   color: 'blue', // 100% 处的颜色
                 },
               ],
               global: false, // 缺省为 false
             },
           },
           //柱条的样式
           itemStyle: {
             borderRadius: [10, 10, 0, 0],
             //柱条颜色
             color: function (data: any) {
               //给每一个柱条这是背景颜色
               let arr = [
                 'red',
                 'orange',
                 'yellowgreen',
                 'green',
                 'purple',
                 'hotpink',
                 'skyblue',
               ]
               return arr[data.dataIndex]
             },
           },
         },
         {
           type: 'line',
           data: [10, 20, 30, 40, 50, 60, 90],
           smooth: true, //平滑曲线
         },
         {
           type: 'bar',
           data: [10, 20, 30, 40, 50, 60, 70],
           //柱状图的:图形上的文本标签，
           label: {
             show: true,
             //文字的位置
             position: 'insideTop',
             //文字颜色
             color: 'yellowgreen',
           },
           //是否显示背景颜色
           showBackground: true,
           backgroundStyle: {
             //底部背景的颜色
             color: {
               type: 'linear',
               x: 0,
               y: 0,
               x2: 0,
               y2: 1,
               colorStops: [
                 {
                   offset: 0,
                   color: 'black', // 0% 处的颜色
                 },
                 {
                   offset: 1,
                   color: 'blue', // 100% 处的颜色
                 },
               ],
               global: false, // 缺省为 false
             },
           },
           //柱条的样式
           itemStyle: {
             borderRadius: [10, 10, 0, 0],
             //柱条颜色
             color: function (data: any) {
               //给每一个柱条这是背景颜色
               let arr = [
                 'red',
                 'orange',
                 'yellowgreen',
                 'green',
                 'purple',
                 'hotpink',
                 'skyblue',
               ]
               return arr[data.dataIndex]
             },
           },
         },
       ],
       tooltip: {
         backgroundColor: 'rgba(50,50,50,0.7)',
       },
     })
   
   ```

   

   ### 4.9 散点图

   ```
     mychart.setOption({
       title: {
         text: '散点图',
         left: '40%',
         textStyle: {
           color: 'white',
         },
       },
       xAxis: {
         type: 'category',
         show: true,
       },
       yAxis: {
         show: false,
       },
       grid: {
         left: 20,
         top: 20,
         right: 0,
         bottom: 20,
       },
       series: {
         type: 'scatter',
         data: [
           33, 88, 21, 9, 88, 234, 113, 1231, 674, 3, 88, 33, 21, 888, 3332, 313,
           123, 5, 657, 7,
         ],
         //标记图形设置
         symbol: 'diamond',
         symbolSize: 16,
         //图文标签
         label: {
           show: true,
           position: 'top',
           color: 'red',
         },
         //散点图标记的颜色
         itemStyle: {
           color: {
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0,
             y2: 1,
             colorStops: [
               {
                 offset: 0,
                 color: 'red', // 0% 处的颜色
               },
               {
                 offset: 1,
                 color: 'blue', // 100% 处的颜色
               },
             ],
             global: false, // 缺省为 false
           },
         },
       },
     })
   
   ```

   

   ##### 也可以不用手写  用现成的样例

   ## 5菜单权限  

   ### 5.1 菜单权限实现

   静态路由

   异步路由 

   任意路由

   

   通过用户的个人信息里的权限 判断是否实现 异步路由

   所以可以根据权限  过滤一下异步路由 

   使用递归符合权限的父子路由过滤一下   并使用 deep深度复制一下 防止登录之后 

   然后将其放在store里面的user分类下  每次获取用户信息的时候可以处理一下异步路由问题

   并且还需要将过滤出来的异步路由合并一常规路由   并且将异步路由和任意路由注册一下

   ```
   分类一下路由
   
   确保里面的路由都有name  用来做权限管理  
   ```

   

   ```
   
   
   //对外暴露配置路由(常量路由):全部用户都可以访问到的路由
   export const constantRoute = [
     {
       //登录
       path: '/login',
       component: () => import('@/views/login/index.vue'),
       name: 'login',
       meta: {
         title: '登录', //菜单标题
         hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
         icon: 'Promotion', //菜单文字左侧的图标,支持element-plus全部图标
       },
     },
     {
       //登录成功以后展示数据的路由
       path: '/',
       component: () => import('@/layout/index.vue'),
       name: 'layout',
       meta: {
         title: '',
         hidden: false,
         icon: '',
       },
       redirect: '/home',
       children: [
         {
           path: '/home',
           component: () => import('@/views/home/index.vue'),
           meta: {
             title: '首页',
             hidden: false,
             icon: 'HomeFilled',
           },
         },
       ],
     },
     {
       //404
       path: '/404',
       component: () => import('@/views/404/index.vue'),
       name: '404',
       meta: {
         title: '404',
         hidden: true,
         icon: 'DocumentDelete',
       },
     },
     {
       path: '/screen',
       component: () => import('@/views/screen/index.vue'),
       name: 'Screen',
       meta: {
         hidden: false,
         title: '数据大屏',
         icon: 'Platform',
       },
     },
   ]
   
   //异步路由
   export const asnycRoute = [
     {
       path: '/acl',
       component: () => import('@/layout/index.vue'),
       name: 'Acl',
       meta: {
         title: '权限管理',
         icon: 'Lock',
       },
       redirect: '/acl/user',
       children: [
         {
           path: '/acl/user',
           component: () => import('@/views/acl/user/index.vue'),
           name: 'User',
           meta: {
             title: '用户管理',
             icon: 'User',
           },
         },
         {
           path: '/acl/role',
           component: () => import('@/views/acl/role/index.vue'),
           name: 'Role',
           meta: {
             title: '角色管理',
             icon: 'UserFilled',
           },
         },
         {
           path: '/acl/permission',
           component: () => import('@/views/acl/permission/index.vue'),
           name: 'Permission',
           meta: {
             title: '菜单管理',
             icon: 'Monitor',
           },
         },
       ],
     },
     {
       path: '/product',
       component: () => import('@/layout/index.vue'),
       name: 'Product',
       meta: {
         title: '商品管理',
         icon: 'Goods',
       },
       redirect: '/product/trademark',
       children: [
         {
           path: '/product/trademark',
           component: () => import('@/views/product/trademark/index.vue'),
           name: 'Trademark',
           meta: {
             title: '品牌管理',
             icon: 'ShoppingCartFull',
           },
         },
         {
           path: '/product/attr',
           component: () => import('@/views/product/attr/index.vue'),
           name: 'Attr',
           meta: {
             title: '属性管理',
             icon: 'ChromeFilled',
           },
         },
         {
           path: '/product/spu',
           component: () => import('@/views/product/spu/index.vue'),
           name: 'Spu',
           meta: {
             title: 'SPU管理',
             icon: 'Calendar',
           },
         },
         {
           path: '/product/sku',
           component: () => import('@/views/product/sku/index.vue'),
           name: 'Sku',
           meta: {
             title: 'SKU管理',
             icon: 'Orange',
           },
         },
       ],
     },
   ]
   
   //任意路由
   export const anyRoute = {
     //任意路由
     path: '/:pathMatch(.*)*',
     redirect: '/404',
     name: 'Any',
     meta: {
       title: '任意路由',
       hidden: true,
       icon: 'DataLine',
     },
   }
   
   
   
   
   
   
   
   
   ```

   

   ```
   //安装一下 深度拷贝的东西
   npm install lodash
   
   ```

   

   ```
   //记得引入异步路由  任意理由 
   
   
   //引入深拷贝方法
   //@ts-expect-error
   import cloneDeep from 'lodash/cloneDeep'
   
   
   //定义一个方法 用来过滤一下一部路由
   //用于过滤当前用户需要展示的异步路由
   function filterAsyncRoute(asnycRoute: any, routes: any) {
     return asnycRoute.filter((item: any) => {
       if (routes.includes(item.name)) {
         if (item.children && item.children.length > 0) {
           //硅谷333账号:product\trademark\attr\sku
           item.children = filterAsyncRoute(item.children, routes)
         }
         return true
       }
     })
   }
   
   
   
   //获取信息成功的时候  做一下异步路由的筛选和判断
   
   //计算当前用户需要展示的异步路由   
           const userAsyncRoute = filterAsyncRoute(
           //深拷贝一下  防止下次改变原来的根异步路由
             cloneDeep(asnycRoute),
             result.data.routes,
           )
           //菜单需要的数据整理完毕
           this.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute]
           //目前路由器管理的只有常量路由:用户计算完毕异步路由、任意路由动态追加
           //注册一下异步路由和任意路由
           ;[...userAsyncRoute, anyRoute].forEach((route: any) => {
             router.addRoute(route)
           })
   
   ```

   

   ```
   //路由放行  
   
   //保证信息加载完毕了  再进行方向
   //万一:刷新的时候是异步路由,有可能获取到用户信息、异步路由还没有加载完毕,出现空白的效果
   next({ ...to })
   ```

   

   ### 5.2 404页面的完善

   搭建一个静态  一个路由跳转即可

   

   ### 5.3 按钮权限的判断

   通过用户信息返回的按钮权限  判断是否展示这个按钮  

   ```
    v-if="userStore.button.includes('btn.Tradenark.add')"
   ```

   判断存储的按钮权限中有没有 按钮

   

   

   为了防止重复使用

   ```
   
   定义一个全局的自定义指令
   
   创建一个文件夹  写一个自定义指令的ts文件
   
   然后再mian.ts上将文件引用挂载一下即可
   
   使用的时候直接  v-has="`btn.Trademark.add`"
   ```

   ```
   //自定义指令的文件  简单使用
   
   
   export const isHasButton = (app: any)=>{
   	
   	//全局自定义指令：实现按钮的权限
   	app.directive('has',{
   	//代表使用这个全局自定义指令的DOM|组件挂载完毕的时候会执行一次
   		mounted(){
   			consloe.log(123),
   		}
   	})
   	
   }
   
   ```

   ```
   import pinia from '@/store'
   import useUserStore from '@/store/modules/user'
   const userStore = useUserStore(pinia)
   export const isHasButton = (app: any) => {
     //获取对应的用户仓库
     //全局自定义指令:实现按钮的权限
     app.directive('has', {
       //代表使用这个全局自定义指令的DOM|组件挂载完毕的时候会执行一次
       mounted(el: any, options: any) {
         //自定义指令右侧的数值:如果在用户信息buttons数组当中没有
         //从DOM树上干掉
         if (!userStore.buttons.includes(options.value)) {
           el.parentNode.removeChild(el)
         }
       },
     })
   }
   
   
   //直接引用用户的权限的按钮信息  然后就是在数组中判断有没有  如果没有的话就直接再DOM树中干掉即可
   
   ```

   

   

   

   ## 6 项目的打包

   ```
   pnpm run build
   ```

   ```
   然后出现一些警告就按照提示调整一下代码即可
   ```

   改完之后 继续

   ```
   pnpm run build
   ```

   没有错了之后继续修复一下

   

   记得将上线环境的  

   VITE_APP_BASE_API = ‘/prod-api’  = > 替换成   VITE_APP_BASE_API = ‘http://sph-api.atguigu.cn ’

   然后打包上线

   ```
   pnpm run build
   ```

   ## 7 项目上线

   

   需要一台云服务器  阿里，腾讯，百度都行

   

   electerm  用软件将打包好的dist文件上传到服务器上

   

   ![image-20231009163542588](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231009163542588.png)

   

   填一下 ip地址 和 用户名  以及密码

   

   然后将dist文件上传到 /root/www文件夹下

   左边命令行  右边时可视化文件窗口

   ![image-20231009164042336](C:\Users\86198\AppData\Roaming\Typora\typora-user-images\image-20231009164042336.png)

   ```
   #   cd /     cd etc
   ```

    

   ```
   ls  //展示一下目录
   ```

   

   然后做一下nginx代理

   ```
   yum install nginx
   
   ```

   

   ```
   cd nginx  
   ```

   ```
   vim nainx.conf //进入编辑页面
   ```

   然后按一下键盘 insert 进行插入

   ```
   user root ;//将权限改成root
   
   
   location /{
   	//这两行 做一下访问之后的路径
   	root /root/www/dist;
   	index index.html index.html;
   
   }
   
   ```

   

   ```
   :wc  //保存
   ```

   

   ```
   systemctl restart nginx.service   //重启服务器
   ```

   
