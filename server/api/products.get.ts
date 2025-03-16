import { PRODUCT_LIST } from '~/server/storage/product-list'
import { CATEGORY_LIST } from '~/server/storage/category-list'
import type { Product } from '~/shared/types/product.interface'
import type { ProductsDto } from '~/shared/types/products.dto'

export default defineEventHandler((event): ProductsDto => {
  const query = getQuery(event)
  const productList = PRODUCT_LIST.filter(
    (product: Product) =>
      product.companyId == query.companyId &&
      (query.categoryId !== '-1' ? product.categoryId == +query.categoryId : true),
  )
  const categoryList = CATEGORY_LIST
  return { productList, categoryList }
})
