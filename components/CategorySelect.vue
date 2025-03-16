<template>
  <div class="category-select-container">
    <q-btn-dropdown
      align="between"
      dropdown-icon="img:/icons/dropdown-button.svg"
      :label="currentCategory.name"
      no-caps
      class="category-select"
      content-class="category-select__dropdown"
      unelevated
    >
      <q-list>
        <q-item
          v-close-popup
          clickable
          @click="currentCategory = baseCategory"
        >
          <q-item-section>
            <q-item-label class="category-select__label">
              <span>
                {{ baseCategory.name }}
              </span>

              <q-icon
                v-if="currentCategory.id == baseCategory.id"
                name="img:/icons/checkmark.svg"
                class="category-select__icon"
              />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          v-for="category in props.categories"
          :key="category.id"
          class="category-select__category-container"
        >
          <q-item-section class="category-select__category-name-container">
            <q-item-label class="category-select__category-name">
              {{ category.name }}
            </q-item-label>
          </q-item-section>
          <q-item-section v-if="category.subcategories?.length">
            <q-list>
              <q-item
                v-for="subcategory in category!.subcategories"
                v-close-popup
                clickable
                class="category-select__subcategory-container"
                @click="currentCategory = subcategory"
              >
                <q-item-section>
                  <q-item-label class="category-select__subcategory-name-container">
                    <div>
                      <span class="category-select__subcategory-name">
                        {{ subcategory.name }}
                      </span>
                      <span class="category-select__subcategory-item-count">
                        {{ subcategory.itemsCount }}
                      </span>
                    </div>

                    <q-icon
                      v-if="currentCategory.id == subcategory.id"
                      name="img:/icons/checkmark.svg"
                      class="category-select__icon"
                    />
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script setup lang="ts">
import type { ProductCategory } from '#shared/types/product.interface'

const baseCategory = {
  name: 'Все товары и услуги',
  id: -1,
  subcategories: undefined,
}
const selectedCategoryId = defineModel()
const currentCategory = ref(baseCategory)
const props = defineProps<{ categories: ProductCategory[] }>()

watch(currentCategory, () => {
  selectedCategoryId.value = currentCategory.value.id
})
</script>

<style scoped></style>
