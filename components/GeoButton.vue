<template>
  <q-btn
    flat
    no-caps
    class="geo-button"
  >
    <q-icon
      name="img:/icons/geo-mark.svg"
      class="geo-button__icon"
    />
    <span class="geo-button__text">{{ currentCity }}</span>
    <q-menu
      auto-close
      fit
    >
      <q-list>
        <q-item
          v-for="city of citiesToSelect"
          :key="city"
          clickable
          @click="handleCityChange(city)"
        >
          {{ city }}
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup lang="ts">
const cities = ['Ростов-на-Дону', 'Москва', 'Питер']

const currentCity = ref<string>(cities[0])
const citiesToSelect = computed(() => {
  return cities.filter(city => city !== currentCity.value)
})

function handleCityChange(city: string) {
  currentCity.value = city
}
</script>

<style scoped lang="scss"></style>
