import type { Product, ProductCategory } from '~/shared/types/product.interface'

export interface ProductsDto {
  productList: Product[]
  categoryList: ProductCategory[]
}
