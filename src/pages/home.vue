<template>
  <PageContainer class="home-page">
    <div class="page-header">
      <h1>{{ t("home.title") }}</h1>
      <Link class="view-all-link-header" to="#viewAll" arrow>{{
        t("home.viewAll")
      }}</Link>
    </div>
    <div class="blog-list">
      <template v-if="!loading">
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </template>
      <template v-else>
        <Skeleton class="loading" />
        <Skeleton class="loading" />
        <Skeleton class="loading" />
        <Skeleton class="loading" />
      </template>
    </div>
    <Link class="view-all-link" to="#viewAll">{{ t("home.viewAll") }}</Link>
  </PageContainer>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { BlogsApi } from "../api/blogs.api";
import BlogCard from "../components/blog-card.vue";
import Link from "../components/link.vue";
import PageContainer from "../components/page-container.vue";
import { t } from "../i18n";
import { Blog } from "../models";
import Skeleton from "../components/skeleton.vue";
const api = new BlogsApi();

const loading = ref(true);
const blogs = ref<Blog[]>([]);

onMounted(async () => {
  try {
    blogs.value = await api.getAll();
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
});
</script>
<style lang="scss" scoped>
@import "../theme/breakpoints.scss";
@import "../theme/colors.scss";
@import "../theme/fonts.scss";
.home-page {
  display: flex;
  flex-direction: column;
  gap: 56px;
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h1 {
      color: $accent-blue;
      font-family: $fontLato;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 50px;
    }
    .view-all-link-header {
      display: none;
      @media screen and (min-width: $bp-tablet) {
        display: flex;
      }
    }
  }
  .view-all-link {
    margin: auto;
    @media screen and (min-width: $bp-tablet) {
      display: none;
    }
  }

  .blog-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 24px;

    .loading {
      border-radius: 8px;
      height: 400px;
    }
  }
}
</style>
