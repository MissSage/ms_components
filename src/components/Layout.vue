<template>
  <div class="ms_components-doc">
    <aside>
      <template v-for="route in routes" :key="route.path">
        <router-link class="router-link-item" v-for="link in route.children" :key="link.path" :to="link.path">{{ link.meta?.title }}</router-link>
      </template>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { routes } from "../router"
</script>

<style lang="less">
@import url("@/assets/markdown.less");
@import url("@/assets/prism.less");
@import url('../../dist/style.css');

.ms_components-doc {
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
.router-link-item{
  line-height: 32px;
  font-size: 16px;
}
pre {
  line-height: 0;
}
.ms_components-preview {
  border: 4px;
  border: 1px dashed #e7e7e7;
  padding: 10px;
  border-bottom: 1px dashed #e7e7e7;
  section {
    margin: 15px;
  }
}

.source-code {
  max-height: 500px;
}
.preview-bottom{
  cursor: pointer;
}
.language-html {
  margin: 0;
  padding: 0 15px;
}
.preview-bottom {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px dashed #e7e7e7;
}
</style>
