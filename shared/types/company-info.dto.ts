import type { Company } from '#shared/types/company.interface'

export interface CompanyInfoDto {
  about: Company['about']
  hourse: Company['hours']
  location: Company['location']
}
