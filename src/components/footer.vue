<template>
  <footer class="app-footer">
    <div class="links">
      <div class="content small-gap">
        <img src="logo.svg" width="50" height="44" :alt="t('footer.logoAlt')" />
        <span class="description">{{ t("footer.description") }}</span>
      </div>
      <div class="content">
        <span class="title">
          {{ t("footer.productLinks.title") }}
        </span>
        <ul>
          <li>
            <Link monochromatic thin to="#features">
              {{ t("footer.productLinks.features") }}</Link
            >
          </li>
          <li>
            <Link monochromatic thin to="#solutions">
              {{ t("footer.productLinks.solutions") }}</Link
            >
          </li>
          <li>
            <Link monochromatic thin to="#help">
              {{ t("footer.productLinks.help") }}</Link
            >
          </li>
          <li>
            <Link monochromatic thin to="#free">{{
              t("footer.productLinks.free")
            }}</Link>
          </li>
          <li>
            <Link monochromatic thin to="#integrations">{{
              t("footer.productLinks.integrations")
            }}</Link>
          </li>
        </ul>
      </div>
      <div class="content">
        <span class="title">
          {{ t("footer.companyLinks.title") }}
        </span>
        <ul>
          <li>
            <Link monochromatic thin to="#about">
              {{ t("footer.companyLinks.about") }}</Link
            >
          </li>
          <li>
            <Link monochromatic thin to="#carrers">
              {{ t("footer.companyLinks.carrers") }}</Link
            >
          </li>
          <li>
            <Link monochromatic thin to="#blog">
              {{ t("footer.companyLinks.blog") }}</Link
            >
          </li>
          <li>
            <Link monochromatic thin to="#events">{{
              t("footer.companyLinks.events")
            }}</Link>
          </li>
          <li>
            <Link monochromatic thin to="#faq">{{
              t("footer.companyLinks.faq")
            }}</Link>
          </li>
        </ul>
      </div>
      <div class="content">
        <span class="title">
          {{ t("footer.internationalLinks.title") }}
        </span>
        <ul>
          <li>
            <Link monochromatic thin to="#tac">
              {{ t("footer.internationalLinks.tac") }}</Link
            >
          </li>
          <li>
            <Link monochromatic thin to="#cookies">
              {{ t("footer.internationalLinks.cookies") }}</Link
            >
          </li>
          <li>
            <Link monochromatic thin to="#privacyPolicy">
              {{ t("footer.internationalLinks.privacyPolicy") }}</Link
            >
          </li>
          <li>
            <Link monochromatic thin to="#dataProtection">{{
              t("footer.internationalLinks.dataProtection")
            }}</Link>
          </li>
        </ul>
      </div>
    </div>
    <div class="socials">
      <a href="#twitter">
        <img
          src="/twitter.svg"
          :alt="t('footer.social.twitter')"
          width="25"
          height="20"
        />
      </a>
      <a href="#facebook">
        <img
          src="/facebook.svg"
          :alt="t('footer.social.facebook')"
          width="10"
          height="22"
        />
      </a>
      <a href="#instagram">
        <img
          src="/instagram.svg"
          :alt="t('footer.social.instagram')"
          width="22"
          height="22"
        />
      </a>
      <a href="#linkedin">
        <img
          src="/linkedin.svg"
          :alt="t('footer.social.linkedin')"
          width="22"
          height="22"
        />
      </a>
      <a href="#youtube">
        <img
          src="/youtube.svg"
          :alt="t('footer.social.youtube')"
          width="28"
          height="20"
        />
      </a>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import { t } from "../i18n";
import Link from "./link.vue";
</script>

<style lang="scss" scoped>
@import "../theme/colors.scss";
@import "../theme/fonts.scss";
@import "../theme/breakpoints.scss";
.app-footer {
  margin-top: auto;
  padding: 142px 16px 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 48px;
  @media screen and (min-width: $bp-tablet-sm) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: min(1220px, 80%);
    margin: auto auto 0;
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;

    @media screen and (min-width: $bp-tablet-sm) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 64px;
      > :first-child {
        grid-column: 1 / 4;
      }
    }

    @media screen and (min-width: $bp-desktop) {
      padding: 0 64px;
      grid-template-columns: repeat(4, 1fr);
      > :first-child {
        grid-column: unset;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 24px;
      &.small-gap {
        gap: 16px;
      }
      .description {
        font-family: $fontLato;
        color: $grey-400;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 20px;
      }
      .title {
        color: $black;
        font-family: $fontLato;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        white-space: nowrap;
      }
      ul {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 16px;
        li {
          list-style: none;
        }
      }
    }
  }
  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding-top: 32px;
    border-top: 1px solid $grey-300;
    a {
      text-decoration: none;
      &:focus {
        outline-color: $accent-red;
      }
    }
  }
}
</style>
