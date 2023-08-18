<template>
  <div class="ms_input">
    <input class="ms_input__inner" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.ms_input {
  font-size: 16px;
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
  vertical-align: middle;
  display: inline-flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 1px 11px;
  background-color: transparent;
  background-image: none;
  border-radius: 4px;
  cursor: text;
  transform: translateZ(0);
  box-shadow: 0 0 0 1px #4C4D4F inset;
}
.ms_input__inner {
  width: 100%;
  flex-grow: 1;
  -webkit-appearance: none;
  color: #666;
  font-size: inherit;
  height: 30px;
  line-height: 30px;
  padding: 0;
  outline: none;
  border: none;
  background: none;
  box-sizing: border-box;
}
</style>
