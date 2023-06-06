<!--
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\views\home\index.vue
 * @Description: 首页
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

defineOptions({
  name: 'Home',
})
</script>

<template>
  <div class="flex items-center">
    <a href="https://vitejs.dev" target="_blank">
      <img src="@/assets/images/vite.svg" class="logo" alt="Vite logo" />
    </a>
    +
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/images/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    +
    <a href="https://www.naiveui.com/zh-CN/light" target="_blank">
      <img src="@/assets/images/naive.svg" class="logo naive-ui" alt="Naive UI logo" />
    </a>
  </div>
  <HelloWorld />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.naive-ui:hover {
  filter: drop-shadow(0 0 2em #5fbc21aa);
}
</style>
