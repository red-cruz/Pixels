<template>
  <PixelButton>
    <div class="icon-container">
      <span title="Next map">next</span>
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
        <polygon points="5 4 15 12 5 20 5 4"></polygon>
        <line x1="19" y1="5" x2="19" y2="19"></line>
      </svg>
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
    margin-right: 3px;
  }
}
</style>
