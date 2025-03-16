<template>
  <div class="product-card">
    <div class="product-card__image-container">
      <img
        :src="product.imagePath"
        class="product-card__image"
      />
      <div
        v-if="product.status !== ProductStatus.Hidden"
        class="product-card__product-info-container"
      >
        <div class="product-card__product-info-field-container">
          <q-icon
            class="product-card__product-info-icon"
            name="img:/icons/views.svg"
          />
          <span>{{ product.viewCount }}</span>
        </div>
        <div class="product-card__product-info-field-container">
          <q-icon
            class="product-card__product-info-icon"
            name="img:/icons/time.svg"
          />
          <span>{{ product.time }}</span>
        </div>
      </div>
      <div
        class="product-card__action-button-container"
        v-if="$viewport.isLessOrEquals('mobile')"
      >
        <q-btn
          label="Действия"
          class="product-card__action-button"
          no-caps
        />
      </div>
    </div>
    <div class="product-card__price-container">
      <div class="product-card__price">{{ formatPrice(product.price) }}</div>
      <div
        v-if="product.unit"
        class="product-card__unit"
      >
        {{ product.unit }}
      </div>
    </div>
    <div class="product-card__description">{{ product.description }}</div>
    <q-separator class="product-card__separator" />
    <div
      v-if="product.status === ProductStatus.Promoted"
      class="product-card__promoted-container"
    >
      Объявление продвигается
    </div>
    <div
      v-if="product.status === ProductStatus.NotPromoted"
      class="product-card__not-promoted-container"
    >
      <div class="product-card__not-promoted-container-text">Увеличьте количество просмотров</div>
      <q-btn
        label="Продвигать"
        color="primary"
        class="product-card__not-promoted-button"
        no-caps
      />
    </div>
    <div
      v-if="product.status === ProductStatus.Hidden"
      class="product-card__hidden-container"
    >
      Объявление скрыто
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Product, ProductStatus } from '#shared/types/product.interface'
import { useNuxtApp } from '#app'

const { $viewport } = useNuxtApp()
const props = defineProps<{ product: Product }>()
</script>

<style scoped></style>
