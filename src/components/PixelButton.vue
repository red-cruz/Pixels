<template>
  <span role="button" class="pixel-button">
    <strong>
      <slot></slot>
    </strong>
  </span>
</template>

<script setup></script>

<style lang="scss" scoped>
.pixel-button {
  cursor: pointer;
  float: right;
  strong {
    display: inline-block;
    position: relative;
    padding: 8px 12px;
    background-color: #e3ff37;
    color: #28248c;
    clip-path: polygon(
      /* top left */ 0 4px,
      4px 4px,
      4px 0,
      /* top right */ calc(100% - 4px) 0,
      calc(100% - 4px) 4px,
      100% 4px,
      /* bottom right */ 100% calc(100% - 4px),
      calc(100% - 4px) calc(100% - 4px),
      calc(100% - 4px) 100%,
      /* bottom left */ 4px 100%,
      4px calc(100% - 4px),
      0 calc(100% - 4px)
    );
    box-shadow: /* bottom right */
      inset -4px -4px 0px rgba(0, 0, 0, 0.2),
      /* top left */ inset 4px 4px 0px rgba(255, 255, 255, 0.2);
    &:hover {
      background-color: rgb(152, 176, 16);
      // color: #3f3d8d;
    }
  }
}
</style>
