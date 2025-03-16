import { COMPANY_MAP } from '~/server/storage/company-list'

export default defineEventHandler(event => {
  const query = getQuery(event)
  const company = COMPANY_MAP.get(+query.companyId)

  if (!company) {
    throw createError(`Company ${query.companyId} not found`)
  }
  const { about, hours, location } = company
  return {
    about,
    hours,
    location,
  }
})
