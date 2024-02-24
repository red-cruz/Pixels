<template>
  <PixelButton class="float-end" @click="copy(link, txt)" title="Copy link to clipboard">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#28248C"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>
  </PixelButton>
</template>

<script setup>
import copy from '@/modules/copy.js'
import { computed } from 'vue'
import PixelButton from './PixelButton.vue'
const props = defineProps({
  id: Number
})

const link = computed(() => `https://play.pixels.xyz/pixels/share/${props.id}`)
const txt = computed(() => `Copied link to map #${props.id}`)
</script>

<style lang="scss" scoped>
.float-end {
  float: right;
}
</style>
