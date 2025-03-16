<template>
  <div class="footer">
    <nav class="footer__link-container">
      <div class="footer__company-name">© Annonce 2023</div>
      <div
        v-for="link in links"
        :key="link.label"
        class="footer__link"
      >
        {{ link.label }}
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
]
</script>

<style scoped></style>
