<template>
  <button class="ms_button" @click="$emit('click', $event)" :class="props.type ?? 'default'">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
defineEmits(["click"])
const props = defineProps<{
  type?: "success" | "default" | "info" | "primary" | "danger" | "warning"
}>()
</script>

<style scoped lang="less">
.ms_button {
  appearance: none;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  box-shadow: 0 0 0 1px #4C4D4F inset;
  &:active {
    background: rgb(92, 185, 243);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #808080;
  }
  &.success {
    background-color: rgb(30, 255, 30);
  box-shadow: 0 0 0 1px rgb(0, 211, 0) inset;
  }
  &.default {
    background: transparent;
  }
  &.info {
    background-color: #808080;
    color: #fff;
  box-shadow: 0 0 0 1px #686868 inset;
  }
  &.primary {
    color: #fff;
    background-color: #2b98ff;
  box-shadow: 0 0 0 1px #1480e4 inset;
  }
  &.danger {
    color: #fff;
    background-color: #ff2727;
  box-shadow: 0 0 0 1px #e20f0f inset;
  }
  &.warning {
    color: #fff;
    background-color: #e7d105;
  box-shadow: 0 0 0 1px #b4a304 inset;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
