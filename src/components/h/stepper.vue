<script setup>
import { ref } from 'vue'
const props = defineProps({
  name: { type: [Array, Object], required: true }
})

const currentStep = ref(1)

const emits = defineEmits(['update:step'])

const previes = () => {
  currentStep.value--
  console.log(currentStep.value, '---')
  emits('update:step', currentStep.value)
}

const handleSubmit = () => {
  console.log('hhhhhhhhhhh')
  if (currentStep.value < props.name.length) {
    currentStep.value++
    emits('update:step', currentStep.value)
  }
}
</script>

<template>
  <div>
    <div class="parent">
      <div v-for="step in name" :key="step.id">
        <span class="circle">{{ step.id }}</span>
        <div class="line"></div>
      </div>
      <div>
        <span class="circle"></span>
      </div>
    </div>

    <form @submit.prevent="handleSubmit">
      <div v-for="n in name" :key="n.title">
        <slot :name="n.title" :index="{ id: n.id }"></slot>
      </div>

      <div>
        <button type="button" @click="previes" :disabled="currentStep === 1">Previos</button>

        <button type="submit">Next</button>
      </div>
    </form>
  </div>
</template>
