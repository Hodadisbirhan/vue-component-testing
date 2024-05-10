<script setup>
const props = defineProps({
  image: {
    type: [String],
    default: '',

    validator: (value) => {
      return value.length > 0
    }
  },

  title: {
    type: [String],
    required: true,
    validator: (value) => {
      return value.length > 3
    }
  }
})
</script>

<template>
  <div>
    <img :src="image" :alt="title" />

    <h2>{{ title }}</h2>
  </div>
</template>
