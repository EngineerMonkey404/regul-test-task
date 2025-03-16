<template>
  <div class="mobile-footer">
    <nav class="mobile-footer__link-container">
      <div class="mobile-footer__company-name">© Annonce 2023</div>
      <div
        v-for="link in links"
        :key="link.label"
        class="mobile-footer__link"
      >
        {{ link.label }}
      </div>

      <div class="mobile-footer__language-container">
        <q-icon
          name="img:/icons/russia.svg"
          size="16px"
        />
        <div class="mobile-footer__language">Русский</div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const links: { label: string; to?: string }[] = [
  {
    label: 'Документы',
  },
  {
    label: 'О компании',
  },
  {
    label: 'Продавцам',
  },
  {
    label: 'Покупателям',
  },
  {
    label: 'Разместить объявление',
  },
]
</script>

<style scoped></style>
