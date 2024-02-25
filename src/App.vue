<template>
  <RouterView />
</template>

<script setup>
import touch from '@/modules/touch'

touch()
</script>
<style lang="scss">
body {
  overflow: auto;
  background-color: #622aff;
  color: white;
  text-transform: uppercase;
  font-family: monospace;
  font-size: 14px;
  font-weight: bold;
}
</style>
