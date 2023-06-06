<!--
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\App.vue
 * @Description: 根入口组件
-->
<script lang="ts" setup>
import { useThemeStore } from '@/store'
import { zhCN, dateZhCN } from 'naive-ui'
const themeStore = useThemeStore()
</script>

<template>
  <n-config-provider
    class="wh-full"
    :theme="themeStore.theme"
    :theme-overrides="themeStore.themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <router-view />
  </n-config-provider>
</template>
