<!--
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\views\home\components\HelloWorld.vue
 * @Description: 功能展示
-->
<script setup lang="ts">
import { useThemeStore } from '@/store'
import type { NotificationType } from 'naive-ui'
import TestMd from '@/assets/markdowns/test.md'

function info() {
  window.$message.info("I don't know why nobody told you how to unfold your love", {
    keepAliveOnHover: true,
  })
}
function error() {
  window.$message.error('Once upon a time you dressed so fine')
}
function warning() {
  window.$message.warning('How many roads must a man walk down')
}
function success() {
  window.$message.success("'Cause you walked hand in hand With another man in my place")
}
function loading() {
  window.$message.loading('If I were you, I will realize that I love you more than any other guy')
}
function notify(type: NotificationType) {
  window.$notification.create({
    type,
    content: '说点啥呢',
    meta: '想不出来',
    duration: 2500,
    keepAliveOnHover: true,
  })
}

const themeStore = useThemeStore()
</script>

<template>
  <n-divider title-placement="left"> 按钮 </n-divider>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary"> Tertiary </n-button>
    <n-button type="primary"> Primary </n-button>
    <n-button type="info"> Info </n-button>
    <n-button type="success"> Success </n-button>
    <n-button type="warning"> Warning </n-button>
    <n-button type="error"> Error </n-button>
    <n-button strong secondary type="primary"> 次要 Primary </n-button>
    <n-button tertiary type="primary"> 次次要 Primary </n-button>
    <n-button quaternary type="primary"> 次次次要 Primary </n-button>
    <n-button type="primary" dashed> 虚线 Primary </n-button>
    <n-button color="#8a2be2"> #8a2be2 </n-button>
    <n-button text> 文本按钮 </n-button>
  </n-space>
  <n-divider title-placement="left"> 信息 </n-divider>
  <n-space>
    <n-button @click="info"> 信息（Hover不消失） </n-button>
    <n-button @click="error"> 错误 </n-button>
    <n-button @click="warning"> 警告 </n-button>
    <n-button @click="success"> 成功 </n-button>
    <n-button @click="loading"> 加载中 </n-button>
  </n-space>
  <n-divider title-placement="left"> 通知 </n-divider>
  <n-space>
    <n-button @click="notify('info')"> 信息 </n-button>
    <n-button @click="notify('success')"> 成功 </n-button>
    <n-button @click="notify('warning')"> 警告 </n-button>
    <n-button @click="notify('error')"> 错误 </n-button>
  </n-space>
  <n-divider title-placement="left"> 图标 </n-divider>
  <n-space>
    <Icon icon="material-symbols:add-reaction" width="32" />
    <SvgIcon type="alarm-on-rounded" :size="32" color="red" />
  </n-space>
  <n-divider title-placement="left"> Markdown </n-divider>
  <TestMd />
  <n-divider title-placement="left"> 主题 </n-divider>
  <n-space>
    <n-switch
      :value="themeStore.isDark"
      @update:value="(value: boolean) => {themeStore.userTheme = value?'dark':'light'}"
    />
    <span>{{ themeStore.isDark ? '深色' : '浅色' }}</span>
  </n-space>
</template>
