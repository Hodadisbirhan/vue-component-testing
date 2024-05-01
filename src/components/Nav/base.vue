<script setup>
const props = defineProps({
  navlink: { type: [Object, Array, String], default: [] }
})
</script>

<template>
  <div class="nav">
    <RouterLink v-for="link in navlink" :key="link.path" :to="link.path">{{
      link.name
    }}</RouterLink>
  </div>
</template>
<style scoped>
.nav {
  width: auto;
  margin: 0%;
  padding: 3rem;

  display: flex;
  flex-direction: row;

  gap: 1rem;
}
</style>
