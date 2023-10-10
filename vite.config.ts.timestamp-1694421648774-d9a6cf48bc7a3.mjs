// vite.config.ts
import {
  defineConfig,
  loadEnv,
} from 'file:///F:/%E9%9D%92%E8%AE%AD/ApiKid/ApiKid%E8%A7%84%E8%8C%83%E7%89%88/ApiKid/node_modules/.pnpm/vite@4.4.9_@types+node@20.4.7_sass@1.66.1/node_modules/vite/dist/node/index.js'
import vue from 'file:///F:/%E9%9D%92%E8%AE%AD/ApiKid/ApiKid%E8%A7%84%E8%8C%83%E7%89%88/ApiKid/node_modules/.pnpm/@vitejs+plugin-vue@4.3.4_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs'
import path from 'path'
import { createSvgIconsPlugin } from 'file:///F:/%E9%9D%92%E8%AE%AD/ApiKid/ApiKid%E8%A7%84%E8%8C%83%E7%89%88/ApiKid/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.4.9/node_modules/vite-plugin-svg-icons/dist/index.mjs'
import { viteMockServe } from 'file:///F:/%E9%9D%92%E8%AE%AD/ApiKid/ApiKid%E8%A7%84%E8%8C%83%E7%89%88/ApiKid/node_modules/.pnpm/vite-plugin-mock@2.9.8_mockjs@1.1.0_vite@4.4.9/node_modules/vite-plugin-mock/dist/index.js'
var vite_config_default = defineConfig(({ command, mode }) => {
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
        '@': path.resolve('./src'),
        // 相对路径别名配置，使用 @ 代替 src
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
          rewrite: (path2) => path2.replace(/^\/api/, ''),
        },
      },
    },
  }
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxcdTk3NTJcdThCQURcXFxcQXBpS2lkXFxcXEFwaUtpZFx1ODlDNFx1ODMwM1x1NzI0OFxcXFxBcGlLaWRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXFx1OTc1Mlx1OEJBRFxcXFxBcGlLaWRcXFxcQXBpS2lkXHU4OUM0XHU4MzAzXHU3MjQ4XFxcXEFwaUtpZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovJUU5JTlEJTkyJUU4JUFFJUFEL0FwaUtpZC9BcGlLaWQlRTglQTclODQlRTglOEMlODMlRTclODklODgvQXBpS2lkL3ZpdGUuY29uZmlnLnRzXCI7Ly8gdml0ZS5jb25maWcudHNcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG4vL1x1NUYxNVx1NTE2NXN2Z1x1OTcwMFx1ODk4MVx1NzUyOFx1NTIzMFx1NzY4NFx1NjNEMlx1NEVGNlxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG4vLyBtb2NrXHU2M0QyXHU0RUY2XHU2M0QwXHU0RjlCXHU2NUI5XHU2Q0Q1XG5pbXBvcnQgeyB2aXRlTW9ja1NlcnZlIH0gZnJvbSAndml0ZS1wbHVnaW4tbW9jaydcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcbiAgbGV0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSlcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoKSxcbiAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgICAgLy8gU3BlY2lmeSB0aGUgaWNvbiBmb2xkZXIgdG8gYmUgY2FjaGVkXG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgICAgICAvLyBTcGVjaWZ5IHN5bWJvbElkIGZvcm1hdFxuICAgICAgICBzeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJyxcbiAgICAgIH0pLFxuICAgICAgLy8gXHU4RkQ5XHU0RTJBXHU2NjJGXHU0RkREXHU4QkMxXHU1RjAwXHU1M0QxXHU5NjM2XHU2QkI1XHU1M0VGXHU0RUU1XHU0RjdGXHU3NTI4bW9ja1x1NjNBNVx1NTNFM1xuICAgICAgdml0ZU1vY2tTZXJ2ZSh7XG4gICAgICAgIGxvY2FsRW5hYmxlZDogY29tbWFuZCA9PT0gJ3NlcnZlJyxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoJy4vc3JjJyksIC8vIFx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFx1NTIyQlx1NTQwRFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NEY3Rlx1NzUyOCBAIFx1NEVFM1x1NjZGRiBzcmNcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBzY3NzXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHU3Njg0XHU5MTREXHU3RjZFXG4gICAgY3NzOiB7XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCIuL3NyYy9zdHlsZXMvdmFyaWFibGUuc2Nzc1wiOycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gXHU0RUUzXHU3NDA2XHU4REU4XHU1N0RGXG4gICAgc2VydmVyOiB7XG4gICAgICBwcm94eToge1xuICAgICAgICBbZW52LlZJVEVfQVBQX0JBU0VfQVBJXToge1xuICAgICAgICAgIC8vXHU4M0I3XHU1M0Q2XHU2NTcwXHU2MzZFXHU3Njg0XHU2NzBEXHU1MkExXHU1NjY4XHU1NzMwXHU1NzQwXHU4QkJFXHU3RjZFXG4gICAgICAgICAgdGFyZ2V0OiBlbnYuVklURV9TRVJWRSxcbiAgICAgICAgICAvL1x1OTcwMFx1ODk4MVx1NEVFM1x1NzQwNlx1OERFOFx1NTdERlxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICAvL1x1OERFRlx1NUY4NFx1OTFDRFx1NTE5OVxuICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUVqQixTQUFTLDRCQUE0QjtBQUVyQyxTQUFTLHFCQUFxQjtBQUM5QixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUFNO0FBQ2pELE1BQUksTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFDckMsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0oscUJBQXFCO0FBQUE7QUFBQSxRQUVuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBQUE7QUFBQSxRQUUxRCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUE7QUFBQSxNQUVELGNBQWM7QUFBQSxRQUNaLGNBQWMsWUFBWTtBQUFBLE1BQzVCLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxPQUFPO0FBQUE7QUFBQSxNQUMzQjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osbUJBQW1CO0FBQUEsVUFDbkIsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxDQUFDLElBQUksaUJBQWlCLEdBQUc7QUFBQTtBQUFBLFVBRXZCLFFBQVEsSUFBSTtBQUFBO0FBQUEsVUFFWixjQUFjO0FBQUE7QUFBQSxVQUVkLFNBQVMsQ0FBQ0EsVUFBU0EsTUFBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLFFBQzlDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
