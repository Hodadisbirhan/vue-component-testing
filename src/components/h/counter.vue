<script setup>
import { ref } from 'vue'
const counter = ref(10)
const emits = defineEmits(['updateCounter'])
const handleClick = () => {
  counter.value += 1

  emits('updateCounter', counter.value)
}
</script>

<template>
  <button @click="handleClick">Increment {{ counter }}</button>
</template>
