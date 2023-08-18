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
      {
        meta: {
          title: '按钮',
        },
        name: 'Button',
        path: '/Button',
        component: () => import('packages/Button/docs/README.md'),
      }
      ,{
        meta: {
          title: '测试组件',
        },
        name: 'Foo',
        path: '/Foo',
        component: () => import('packages/Foo/docs/README.md'),
      }
      ,{
        meta: {
          title: '输入框',
        },
        name: 'Input',
        path: '/Input',
        component: () => import('packages/Input/docs/README.md'),
      }
      ,{
        meta: {
          title: '复选框',
        },
        name: 'Checkbox',
        path: '/Checkbox',
        component: () => import('packages/Checkbox/docs/README.md'),
      }
      ,{
        meta: {
          title: '下拉框',
        },
        name: 'Select',
        path: '/Select',
        component: () => import('packages/Select/docs/README.md'),
      }
      ,{
        meta: {
          title: '标签',
        },
        name: 'Tag',
        path: '/Tag',
        component: () => import('packages/Tag/docs/README.md'),
      }
      ,{
        meta: {
          title: '树组件',
        },
        name: 'Tree',
        path: '/Tree',
        component: () => import('packages/Tree/docs/README.md'),
      }
      
    ]
  }
];

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/components" : "/"),
  routes
})

export default router
