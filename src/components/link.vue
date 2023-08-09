<template>
  <a :href="to" class="link" :class="{ monochromatic, thin }">
    <slot></slot>

    <svg
      v-if="arrow"
      width="6"
      height="11"
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
    >
      <path
        d="M1 1L5 5.5L1 10"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</template>
<script lang="ts" setup>
defineProps<{
  to?: string;
  arrow?: boolean;
  monochromatic?: boolean;
  thin?: boolean;
}>();
</script>
<style lang="scss" scoped>
@import "../theme/colors.scss";
@import "../theme/fonts.scss";
.link {
  display: flex;
  align-items: center;
  gap: 16px;
  color: $accent-red;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  font-family: $fontLato;
  width: fit-content;
  white-space: nowrap;
  &:focus {
    outline-color: $accent-red;
  }
  .icon path {
    stroke: $accent-red;
  }
  &.monochromatic {
    color: $grey-400;
    .icon path {
      stroke: $grey-400;
    }
  }
  &.thin {
    font-weight: 300;
  }
}
</style>
