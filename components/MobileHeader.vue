<template>
  <q-toolbar class="mobile-header">
    <div class="mobile-header__menu-container">
      <q-icon
        name="img:/icons/hamburger.svg"
        size="24px"
      />
    </div>

    <div class="mobile-header__right-part-container">
      <div class="mobile-header__logo-container">
        <q-toolbar-title class="mobile-header__logo">Annoncé</q-toolbar-title>
      </div>
      <q-btn
        icon="img:/icons/bag.svg"
        padding="8px"
      >
        <q-badge
          floating
          round
          class="mobile-header__badge"
        >
          <q-icon
            name="img:/icons/badge.svg"
            size="16px"
          ></q-icon>
        </q-badge>
      </q-btn>
    </div>
  </q-toolbar>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
