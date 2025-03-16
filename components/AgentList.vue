<template>
  <div class="agent-list">
    <AgentCard
      v-for="agent of agentInfo.agentList"
      :key="agent.id"
      :agent
    />
  </div>
</template>

<script setup lang="ts">
import type { AgentsDto } from '#shared/types/agents.dto'

const { data: agentInfo } = await useFetch<AgentsDto>('/api/agents', { query: { companyId: 1 } })
</script>

<style scoped></style>
