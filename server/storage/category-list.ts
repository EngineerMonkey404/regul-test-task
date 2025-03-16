import type { Product, ProductCategory } from '~/shared/types/product.interface'
import { PRODUCT_LIST } from '~/server/storage/product-list'

function countItems(categoryId: number, productList: Product[]): number {
  return productList.filter(product => product.categoryId == categoryId).length
}

export const CATEGORY_LIST: ProductCategory[] = [
  {
    name: 'Категория 1',
    id: 1,
    itemsCount: countItems(1, PRODUCT_LIST),
    subcategories: [
      {
        name: 'Гробы',
        id: 3,
        itemsCount: countItems(3, PRODUCT_LIST),
      },
      {
        name: 'Урны',
        id: 4,
        itemsCount: countItems(4, PRODUCT_LIST),
      },
    ],
  },
  {
    name: 'Категория 2',
    id: 2,
    itemsCount: countItems(1, PRODUCT_LIST),
    subcategories: [
      {
        name: 'Тапки',
        id: 5,
        itemsCount: countItems(5, PRODUCT_LIST),
      },
      {
        name: 'Покрывало',
        id: 6,
        itemsCount: countItems(6, PRODUCT_LIST),
      },
    ],
  },
]
