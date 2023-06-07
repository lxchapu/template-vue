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
