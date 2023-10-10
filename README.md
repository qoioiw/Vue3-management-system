1. ApiKid

   #### 环境准备

   - node v16.15.2
   - pnpm 8.0.0

   ## 1.1 项目创建

   ## 安装pnpm npm i -g pnpm

   ### 第一步 pnpm create vite 创建脚手架

   ### 第二步 选择项目名字 ApiKid

   ### 第三选择创建什么类型的项目 Vue

   ### 第四步 选择脚本语言 Ts

   #### 创建完毕

   ## 1.2 初始化 安装依赖 并运行

   ```
      pnpm install
   
      pnpm run dev
   ```

   ## 1.3 项目初始化完成

   ## 1.4 删掉一些默认文件，项目文件的配置

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

   #### 紧接着就是继续安装插件 vue3环境代码校验插件

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

   修改.eslintrc.cjs配置文件 添加一下配置文件的规则进去了 需要手动cv添加一下

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

   当运行上一个指令时 校验代码 后一个是校验并修复

   ok 可以在js代码中写一个 var a=100 因为eslint不支持var写法 所以第一个指令会抛出问题 这时候可以用第二个指令修复

   ### 配置prettier

   ### Eslint是为了保证js代码质量 而Prettier是为了保证代码的美观问题

   #### 安装依赖包

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
   ```
