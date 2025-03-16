<template>
  <div class="subject-info">
    <template v-if="props!.isApproved">
      <q-icon
        class="subject-info__icon"
        name="img:/icons/is-approved.svg"
      />

      <span v-if="$viewport.isLessOrEquals('mobile')">Проверен</span>
      <span v-else>Документы проверены</span>
      <span>•</span>
    </template>

    <template v-if="reviewCount">
      <q-icon
        class="subject-info__icon"
        name="img:/icons/reviews.svg"
      />
      <span>{{ props.avgReview }}</span>

      <span>•</span>
      <span>
        {{ props.reviewCount }}
        {{ toCaseCount(props!.reviewCount, ['отзыв', 'отзыва', 'отзывов']) }}
      </span>
    </template>
    <span v-else>Нет отзывов</span>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'

const { $viewport } = useNuxtApp()
const props = defineProps<{
  reviewCount?: number
  isApproved?: boolean
  avgReview?: number
}>()
</script>

<style scoped></style>
