<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavLink from '@/components/Nav/base.vue'
const links = ref([
  { name: 'base', path: '/base' },
  { name: 'show', path: '/base/show' }
])
</script>

<template>
  <div class="wrapper">
    <div class="nav">
      <NavLink :navlink="links" />
    </div>
    <RouterView />
  </div>
</template>
<style scoped>
.wrapper {
  width: 90%;
  margin: auto;
}
</style>
