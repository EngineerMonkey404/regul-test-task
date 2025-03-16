import type { Company } from '#shared/types/company.interface'

export enum ProductStatus {
  Hidden = 'HIDDEN',
  Promoted = 'PROMOTED',
  NotPromoted = 'NOT_PROMOTED',
}

export interface ProductCategory {
  name: string
  id: number
  itemsCount: number
  subcategories?: ProductCategory[]
}

export interface Product {
  imagePath: string
  time?: string
  viewCount?: number
  price: number
  description: string
  status: ProductStatus
  categoryId: ProductCategory['id']
  companyId: Company['id']
  unit?: string
}
