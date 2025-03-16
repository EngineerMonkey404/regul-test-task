<template>
  <div>
    <CategorySelect
      v-model="currentCategoryId"
      :categories="productsInfo.categoryList"
    />
    <div class="product-list">
      <ProductCard
        v-for="(product, index) in productsInfo.productList"
        :key="index"
        :product
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductsDto } from '#shared/types/products.dto'

const currentCategoryId = ref(-1)
const query = computed(() => ({
  companyId: '1',
  categoryId: currentCategoryId.value,
}))
const { data: productsInfo, error, refresh } = await useFetch<ProductsDto>(`/api/products`, { query })
</script>

<style scoped></style>
