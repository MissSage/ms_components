<template>
  <div>
    <ms_button @click="onClick(1)">第一个</ms_button>
    <ms_button @click="onClick(2)">第二个</ms_button>
    <ms_button @click="onClick(3)" :disabled="true">禁用</ms_button>
    <ms_button @click="onClick(3)" :type="'default'">default</ms_button>
    <ms_button @click="onClick(3)" :type="'success'">success</ms_button>
    <ms_button @click="onClick(3)" :type="'primary'">primary</ms_button>
    <ms_button @click="onClick(3)" :type="'info'">info</ms_button>
    <ms_button @click="onClick(3)" :type="'danger'">danger</ms_button>
    <ms_button @click="onClick(3)" :type="'warning'">warning</ms_button>
  </div>
</template>

<script setup>
const onClick = (num) => { console.log(`我是第 ${num} 个自定义按钮`) }
</script>