<template>
  <q-toolbar class="header">
    <div class="row">
      <q-toolbar-title class="header__logo">Annoncé</q-toolbar-title>
      <CategoryButton class="header__category-button" />
    </div>
    <q-space />
    <div class="header__right-part-container">
      <GeoButton class="header__geo-button" />

      <q-separator
        vertical
        class="header__separator"
      />
      <q-btn
        text-color="primary"
        class="header__place-button"
        flat
        no-caps
      >
        Разместить объявление
      </q-btn>
      <ClientOnly>
        <ProfileButton class="header__profile-button" />
      </ClientOnly>

    </div>
  </q-toolbar>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss"></style>
