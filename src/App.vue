<template>
  <div class="ms-components-doc">
    <aside>
      <router-link v-for="(link, index) in routes" :key="index" :to="link.path">{{ link.meta?.title }}</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import {routes} from './router'
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
.ms-components-doc {
  display: flex;
  min-height: 100%;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>