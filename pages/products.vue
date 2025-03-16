<template>
  <div class="products">
    <CompanyInfo
      :company="company"
      v-if="!companyInfoIsHidden"
      class="products__company-info"
    />
    <CompanyTabs
      v-model="currentTab"
      :tabs="tabs"
      class="products__company-tabs"
    />
  </div>

  <component :is="currentTab.component" />
</template>

<script setup lang="ts">
import { ProductList, AboutCompany, AgentList } from '#components'
import type { CompanyDto } from '#shared/types/company.dto'
import type { Tab } from '~/types/tab.interface'
import { useNuxtApp } from '#app'
definePageMeta({
  middleware: ['protected'],
})

const { $viewport } = useNuxtApp()

const companyInfoIsHidden = computed(() => {
  return $viewport.isLessOrEquals('mobile') ? currentTab.value.label !== tabs[2].label : false
})

const { data: company, error } = await useFetch<CompanyDto>('/api/company/1')

const tabs: Tab[] = [
  { component: markRaw(ProductList), label: 'Товары и услуги' },
  {
    component: markRaw(AgentList),
    label: 'Агенты ',
    agentsCount: company.value?.agentsCount,
  },
  { component: markRaw(AboutCompany), label: 'О компании' },
]

const currentTab = ref(tabs[0])
</script>

<style scoped>

</style>
