import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-vue-markdown';
import qiankun from "vite-plugin-qiankun"

// 文档: https://vitejs.dev/config/
export default defineConfig({
  // base: '/ms_components/',
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      packages: resolve(__dirname, '../packages'),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    qiankun("ms_components", {
      useDevMode: true
    })
  ],
  server: {
    host: 'localhost',
    port: 3456,
    headers: {
      "Access-Control-Allow-Origin": "*" // 主应用获取子应用时跨域响应头
    },
    origin: "http://localhost:3456"
  }
});
