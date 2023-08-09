<template>
  <div class="skeleton"></div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
@import "../theme/colors.scss";
.skeleton {
  width: 100%;
  background-color: $grey-300;
  animation: pulse 1s infinite;
  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
}
</style>
