/* eslint-disable prettier/prettier */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import { qiankunWindow } from "vite-plugin-qiankun/dist/helper"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

export const routes = [
  {
    meta: {
      title: "组件库"
    },
    name: "ms_components",
    path: "/",
    component: () => import("@/components/Layout.vue"),
    children: [
      {{ routes }}
    ]
  }
];

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/components" : "/"),
  routes
})

export default router
