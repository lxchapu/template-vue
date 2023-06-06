<!--
 * @Author: 杨旭
 * @Date: 2023-06-06 13:09:50
 * @LastEditors: 杨旭
 * @LastEditTime: 2023-06-06 13:09:50
 * @FilePath: template-vue\src\components\SvgIcon.vue
 * @Description: Svg 图标
-->
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type: string
    size?: number
    color?: string
  }>(),
  {
    size: 16,
    color: '#333',
  }
)
const prefix = 'sprite-'
const svgClass = computed(() => 'icon icon-' + props.type)
const iconSize = computed(() => `${props.size}px`)
const symbolId = computed(() => `#${prefix}${props.type}`)
</script>

<template>
  <svg aria-hidden="true" :class="svgClass" :style="{ width: iconSize, height: iconSize }">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>
