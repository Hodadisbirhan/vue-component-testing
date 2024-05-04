<script setup>
import { ref, watch, reactive, watchEffect } from 'vue'
const data = ref('Base')
const datas = reactive({ name: 'hodadis Birhan', email: 'hod@gmail.com' })

watch(datas, (newValue) => {
  console.log(newValue)
})

watchEffect(() => {
  console.log('hhhhhhhhhhhhhhhhhhhh')
})
</script>

<template>
  <div>
    {{ data }}
    <button @click="datas.name = 'lela'">{{ datas }}</button>
  </div>
</template>
