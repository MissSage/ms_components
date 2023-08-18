import baseConfig from "./base.config"
import { defineConfig } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy"

import qiankun from "vite-plugin-qiankun"
export default defineConfig(({ mode }) => {
  const isPro = mode === "production"
  return {
    ...baseConfig,
    base: isPro ? "/ms_components/" : "/",
    plugins: [
      ...(baseConfig as any).plugins,
      viteStaticCopy({
        structured: true,
        targets: [{ src: "packages/**/docs/*.vue", dest: "", }]
      }),
      qiankun("ms_components", {
        useDevMode: true
      })
    ],
    build: {
      outDir: "docs"
    },
    server: {
      headers: {
        "Access-Control-Allow-Origin": "*" // 主应用获取子应用时跨域响应头
      }
    }
  }
})
