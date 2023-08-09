<template>
  <main class="page-container">
    <slot></slot>
  </main>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
@import "../theme/mixins.scss";
.page-container {
  @include content-max-width;
  margin-top: 48px;
}
</style>
