<template>
  <div
    class="about-company"
    v-if="companyInfo && status !== 'pending'"
  >
    <div class="about-company__info-container">
      <div class="about-company__title">{{ companyInfo!.about.title }}</div>
      <div class="about-company__description">{{ companyInfo!.about.description }}</div>
    </div>

    <div class="about-company__info-container about-company__info-container_disabled a">
      <div class="about-company__title about-company__title_collapse">
        <span>
          {{ companyInfo!.hours.title }}
        </span>
        <q-icon
          name="img:/icons/collapse-button.svg"
          size="24px"
        />
      </div>
      <div class="about-company__description">{{ companyInfo!.hours.description }}</div>
    </div>

    <div class="about-company__info-container about-company__info-container_map">
      <div>
        <div class="about-company__title">{{ companyInfo!.location.title }}</div>
        <div class="about-company__description about-company__description_green">
          {{ companyInfo!.location.description }}
        </div>
      </div>
      <div class="about-company__map-container">
        <img
          src="/icons/map.png"
          class="about-company__map"
        />
      </div>
    </div>
  </div>
  <div v-if="error"></div>
  <div v-if="status === 'pending'">
    <q-circular-progress
      indeterminate
      rounded
      size="50px"
      color="lime"
      class="q-ma-md"
    />
  </div>
</template>

<script setup lang="ts">
const { data: companyInfo, error, status } = await useFetch('/api/company/about', { query: { companyId: 1 } })
</script>

<style scoped></style>
