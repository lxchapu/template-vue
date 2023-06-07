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
