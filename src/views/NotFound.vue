<!--
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\views\NotFound.vue
 * @Description: 404
-->
<script lang="ts" setup>
const router = useRouter()

/** 刷新重试 */
const refresh = () => {
  window.location.reload()
}

/** 返回首页 */
const goHome = () => {
  router.push({ name: 'Home' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-8">
    <img src="@/assets/images/404.svg" class="mb-5" alt="404" />

    <p class="mb-2 text-lg font-bold c-gray-700">页面没找到</p>

    <p class="mb-8 c-gray-500">很抱歉，您访问的页面不存在！</p>

    <div class="flex space-x-20">
      <n-button type="primary" @click="refresh">刷新重试</n-button>
      <n-button type="primary" @click="goHome"> 返回首页</n-button>
    </div>
  </div>
</template>
