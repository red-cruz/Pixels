<template>
  <footer class="gh">
    <img :src="gh" alt="github" width="20" />
    <a href="https://github.com/red-cruz/pixels-map" target="_blank">See project on GitHub</a>
  </footer>
</template>

<script setup>
import gh from '@/img/github-mark.png'
</script>

<style lang="scss" scoped>
.gh {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  img {
    margin-right: 5px;
  }
  a {
    text-decoration: none;
    color: inherit;
    // font-family: monospace;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
