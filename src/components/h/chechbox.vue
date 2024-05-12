<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  value: { type: [String, Number] },
  name: {
    type: String
  },
  id: {
    type: [String]
  }
})

const model = defineModel()
</script>

<template>
  <div>
    <input type="checkbox" :id="id" :name="name" v-model="model" />
    <label :for="id" v-if="label">{{ label }}</label>
  </div>
</template>
