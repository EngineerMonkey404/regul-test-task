<template>
  <div class="company-info">
    <template v-if="company">
      <q-avatar
        size="120px"
        square
      >
        <img :src="company!.image" />
      </q-avatar>
      <div class="company-info__company-name">{{ company!.name }}</div>
      <SubjectInfo v-bind="company!.info" />
      <q-btn
        v-if="!$viewport.isLessOrEquals('mobile')"
        color="primary"
        class="company-info__button"
        no-caps
        label="Показать номер телефона"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { CompanyDto } from '#shared/types/company.dto'
import { useNuxtApp } from '#app'

const { $viewport } = useNuxtApp()
const props = defineProps<{ company: CompanyDto }>()
</script>

<style scoped></style>
