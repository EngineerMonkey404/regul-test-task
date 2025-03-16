import { COMPANY_MAP } from '~/server/storage/company-list'
import type { CompanyDto } from '~/shared/types/company.dto'

export default defineEventHandler((event): CompanyDto => {
  const companyId = getRouterParam(event, 'id')
  const company = COMPANY_MAP.get(+companyId)

  if (!company) {
    throw createError(`Company ${companyId} not found`)
  }
  const { id, name, image, agentsCount, info } = company
  return {
    id,
    name,
    image,
    agentsCount,
    info,
  }
})
