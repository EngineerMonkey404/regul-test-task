import type { Company } from '#shared/types/company.interface'

export interface User {
  id: number
  login: string
  password: string
  firstName: string
  secondName: string
  fullName?: string
  image: string
  isApproved?: boolean
  avgReview?: number
  reviewCount?: number
  description: string
  companyId: Company['id']
}
