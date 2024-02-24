<template>
  <PixelButton>
    <div class="icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#28248C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polygon points="19 20 9 12 19 4 19 20"></polygon>
        <line x1="5" y1="19" x2="5" y2="5"></line>
      </svg>
      <span title="Previous map">prev</span>
    </div>
  </PixelButton>
</template>

<script setup>
import PixelButton from './PixelButton.vue'
</script>

<style lang="scss" scoped>
.icon-container {
  display: flex;
  align-items: center; /* Vertically centers child elements */
  span {
    margin-left: 3px;
  }
}
</style>
