<template>
  <div class="blog-card-container">
    <div class="blog-content">
      <img
        class="blog-image"
        object-fit="cover"
        :src="blog.image"
        :alt="blog.imageDescription"
      />

      <h3 class="title">{{ blog.title }}</h3>
      <span class="description">{{ blog.description }}</span>
    </div>
    <Link class="read-more-link" :to="blogPage">{{
      t("blogCard.button")
    }}</Link>
  </div>
</template>
<script lang="ts" setup>
import { Blog } from "../models";
import Link from "./link.vue";
import { t } from "../i18n";
import { computed } from "vue";
const props = defineProps<{ blog: Blog }>();

const blogPage = computed(() => `/blog/${props.blog.id}`);
</script>
<style lang="scss" scoped>
@import "../theme/colors.scss";
@import "../theme/fonts.scss";
.blog-card-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  .blog-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: flex-start;
    align-items: stretch;
    .blog-image {
      position: relative;
      isolation: isolate;
      width: 100%;
      aspect-ratio: 4 / 3;
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-color: $grey-300;
        z-index: 1;
      }
    }
    .title {
      color: $accent-blue;
      font-family: $fontInter;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
    }
    .description {
      color: $grey-200;
      font-family: $fontLato;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 173.333% */
    }
  }
  .read-more-link {
    margin-top: auto;
  }
}
</style>
