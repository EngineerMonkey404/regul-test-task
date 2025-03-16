export default defineNuxtRouteMiddleware(async to => {
  if (import.meta.server) return
  const authStore = useAuthStore()

  try {
    await authStore.checkAuth()
  } catch {
    if (!authStore.user) {
      return navigateTo('/login')
    }
  }
})
