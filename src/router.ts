import { qiankunWindow } from "vite-plugin-qiankun/dist/helper"
import list from "../packages/list.json"
/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterOptions } from "vue-router"
export const routes: RouteRecordRaw[] = list.map(item => {
  return {
    meta: {
      title: item.compZhName
    },
    name: item.compName,
    path: "/" + item.compName,
    component: () => import(`../packages/${item.compName}/docs/README.md`)
  }
})

const routerConfig = {
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/components" : "/"),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 }
    }
  }
}

const router = createRouter(routerConfig as RouterOptions)

export default router
