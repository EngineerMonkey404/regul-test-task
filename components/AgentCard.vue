<template>
  <div class="agent-card">
    <div v-if="!imageIsHidden">
      <img
        :src="props.agent.image"
        class="agent-card__image"
      />
    </div>

    <div class="agent-card__info">
      <div
        class="agent-card__mobile-container"
        v-if="imageIsHidden"
      >
        <div>
          <img
            :src="props.agent.image"
            class="agent-card__mobile-image"
          />
        </div>

        <div>
          <div class="agent-card__name">{{ props.agent.fullName }}</div>
          <SubjectInfo v-bind="userInfo" />
        </div>
      </div>
      <template v-else>
        <div class="agent-card__name">{{ props.agent.fullName }}</div>
        <SubjectInfo v-bind="userInfo" />
      </template>

      <div class="agent-card__description">{{ props.agent.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from '#shared/types/user.interface'
import { useNuxtApp } from '#app'

const { $viewport } = useNuxtApp()

const imageIsHidden = computed(() => {
  return $viewport.isLessOrEquals('mobile')
})
const props = defineProps<{ agent: User }>()
const userInfo = {
  reviewCount: props.agent.reviewCount,
  isApproved: props.agent.isApproved,
  avgReview: props.agent.avgReview,
}
</script>

<style scoped></style>
