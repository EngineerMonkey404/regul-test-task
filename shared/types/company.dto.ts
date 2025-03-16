import type { Company } from '#shared/types/company.interface'

export interface CompanyDto {
  id: Company['id']
  name: Company['name']
  image: Company['image']
  agentsCount: Company['agentsCount']
  info: Company['info']
}
