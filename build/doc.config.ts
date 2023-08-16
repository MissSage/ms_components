import baseConfig from "./base.config"
import { defineConfig } from "vite"
export default defineConfig({
  ...baseConfig,
  plugins: [
    ...(baseConfig.plugins || [])
    // viteCopyPlugin([
    //   {
    //     src: path.resolve(__dirname, '../packages'),
    //     target: path.resolve(__dirname, '../docs/packages')
    //   }
    // ])
  ],
  base: "/ms_components/",
  build: {
    outDir: "docs"
  },
  preview: {
    port: 8087,
    strictPort: true
  }
})
