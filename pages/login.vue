<template>
  <div class="login-container">
    <q-input
      v-model="user.login"
      label="Логин"
    />
    <q-input
      v-model="user.password"
      label="Пароль"
    />
    <q-btn @click="handleLogin">Отправить</q-btn>
    <div
      v-if="err"
      class="text-red"
    >
      Ошибка
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const err = ref(false)
const router = useRouter()
const authStore = useAuthStore()
const user = reactive({
  login: '',
  password: '',
})

definePageMeta({
  layout: false,
})

async function handleLogin() {
  try {
    await authStore.login(user.login, user.password)
    await router.push('/')
  } catch (error) {
    err.value = true
  }
}
</script>

<style scoped>
.h-screen {
}
</style>
