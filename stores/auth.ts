import type { UserDto } from '#shared/types/user.dto'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref<UserDto | null>(null)
  const router = useRouter()

  function setUser(newUser: UserDto) {
    user.value = newUser
  }

  async function login(login: string, password: string) {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: { login, password },
    })
    user.value = response.user
  }

  async function logout() {
    await $fetch('/api/auth/logout', { method: 'DELETE' })
    user.value = null
    router.push('/login')
  }

  async function checkAuth() {
    const response = await $fetch('/api/auth/login', { method: 'GET' })
    setUser(response.user)
  }

  return {
    user,
    login,
    checkAuth,
    logout,
  }
})
