import { USER_LIST } from '~/server/storage/user-list'
import { User } from '~/shared/types/user.interface'
import { AgentsDto } from '~/shared/types/agents.dto'

export default defineEventHandler((event): AgentsDto => {
  const query = getQuery(event)
  const agentList = USER_LIST.filter((agent: User) => agent.companyId == query.companyId)
  return { agentList }
})
