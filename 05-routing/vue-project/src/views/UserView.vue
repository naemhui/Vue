<template>
  <div>
    <h1>UserView</h1>
    <RouterLink :to="{ name: 'user-profile'}">Profile</RouterLink>
    <RouterLink :to="{ name: 'user-profile'}">Profile</RouterLink>
    <h2>{{ $route.params }}번 유저 프로필 페이지</h2>
    <h2>{{ $route.params.id }}번 유저 프로필 페이지</h2>
    <h2>{{ userId }}번 유저 프로필 페이지</h2>
    <button @click="goHome"></button>
  </div>
</template>

<script setup>
import { useRoute, RouterLink, RouterView, useRouter } from 'vue-router';
import { ref}  from 'vue'
import UserProfile from '@/components/UserProfile.vue';

const route = useRoute()
const userId = ref(route.params.id)

const router = UserRouter()
const goHome = function () {
  // router.push({ name : 'home' })  // 뒤로가기 가능
  router.replace({ name : 'home' })  // 뒤로가기 불가능
}

</script>

<style scoped>

</style>