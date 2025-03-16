<template>
  <q-layout>
    <MobileHeader v-if="$viewport.isLessOrEquals('mobile')" />
    <AppHeader v-else />
    <q-page-container>
      <slot />
    </q-page-container>
    <q-footer>
      <MobileFooter v-if="$viewport.isLessOrEquals('mobile')" />
      <AppFooter v-else />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'

const { $viewport } = useNuxtApp()
</script>

<style scoped></style>
