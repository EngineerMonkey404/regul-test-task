<template>
  <q-btn
    rounded
    class="profile-button"
    color="secondary"
    text-color="on-secondary-container"
    no-caps
  >
    <q-icon
      name="img:/icons/hamburger.svg"
      class="profile-button__icon"
    />
    <ClientOnly>
      <q-avatar
        v-if="authStore.user"
        size="40px"
      >
        <img :src="authStore.user!.image" />
      </q-avatar>
    </ClientOnly>
    <q-skeleton
      v-if="!authStore.user"
      type="QAvatar"
      size="40px"
    />
    <q-menu
      auto-close
      fit
    >
      <q-list>
        <q-item
          clickable
          @click="handleLogout"
        >
          Выйти
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup lang="ts">
const authStore = useAuthStore()

async function handleLogout() {
  await authStore.logout()
}
</script>

<style scoped></style>
