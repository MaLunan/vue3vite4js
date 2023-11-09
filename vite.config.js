import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  // 别名
  resolve: {
    alias: {
        '@': resolve(__dirname, './src')
    }
},
  // 端口配置
  server: {
    host: '0.0.0.0',
    port: 8000, // 端口
    proxy: {
        '/api': {
        //10.1.5.23:8888--高海翔、、'http://10.1.5.23:8888'---服务器//10.21.2.55/10.21.12.56:8888---郝亚剑//120.53.84.155:443云服务
        target: 'https://120.53.84.155:443',////http://10.1.201.190:80======10.1.41.103:8888---李全港//10.21.12.192:8888--张吉祥
        rewrite: (path) => path.replace(/^\/api/, ''),
        ws: false,
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
},
plugins: [
  vue(),
  Components({
  resolvers: [
    AntDesignVueResolver({
      importStyle: false, // css in js
    }),
  ],
}),],
build: {
  // outDir: 'distBigScreenBase' // 打包文件的输出目录
},
})
