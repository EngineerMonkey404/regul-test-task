<template>
  <div class="company-tabs-container">
    <div class="company-tabs">
      <q-btn
        v-for="(tab, index) in props.tabs"
        :key="index"
        :label="tab.agentsCount ? tab.label + ` ${tab.agentsCount}` : tab.label"
        color="secondary"
        class="company-tabs__button"
        no-caps
        :class="{ 'company-tabs__button_active': currentTab.label === tab.label }"
        @click="currentTab = tab"
      />
    </div>
    <q-separator />
  </div>
</template>

<script setup lang="ts">
import type { Tab } from '~/types/tab.interface'

const currentTab = defineModel()
const props = defineProps<{ tabs: Tab[] }>()
</script>

<style scoped />
