<script setup>
import { ref } from 'vue'
const props = defineProps({
  name: { type: [Array, Object], required: true }
})

const currentStep = ref(props.name[0].id)

const emits = defineEmits(['update:step'])

const previes = () => {
  const indexOFA = props.name.findIndex((element) => {
    return element?.id === currentStep.value
  })

  if (indexOFA > 0) {
    currentStep.value = props.name[indexOFA - 1].id
    emits('update:step', currentStep.value)
  }
}

const handleSubmit = () => {
  console.log('hhhhhhhhhhh')
  const indexOFA = props.name.findIndex((element) => {
    return element?.id === currentStep.value
  })
  console.log(indexOFA)

  if (indexOFA < props.name.length - 1) {
    currentStep.value = props.name[indexOFA + 1].id
    emits('update:step', currentStep.value)
  }
}
const getIndex = (index) => {
  return props.name.findIndex((element) => {
    return element.id === index
  })
}
</script>

<template>
  <div>
    <div class="parent">
      <div class="step" v-for="step in name" :key="step.id">
        <span
          class="circle"
          :style="
            step.id === currentStep
              ? { borderWidth: '0.002rem', borderColor: 'blue', borderStyle: 'solid' }
              : getIndex(step.id) < getIndex(currentStep)
                ? { backgroundColor: 'blue' }
                : {}
          "
          v-if="step.id !== name[name.length - 1].id"
          >{{ step.id }}</span
        >
        <div class="line" v-if="step.id !== name[name.length - 1].id"></div>
      </div>
      <div>
        <span
          class="circle"
          :style="
            currentStep === name[name.length - 1].id
              ? { borderWidth: '0.002rem', borderColor: 'blue', borderStyle: 'solid' }
              : {}
          "
          >{{ name[name.length - 1].id }}</span
        >
      </div>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="form" v-for="n in name" :key="n.title">
        <slot :name="n.title" :index="{ id: n.id }"></slot>
      </div>

      <div class="bottomForm">
        <button type="button" @click="previes">Previos</button>

        <button type="submit">Next</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.form {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.step {
  display: flex;
  flex-direction: row;
  gap: 0;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.circle {
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  color: black;
}
.line {
  width: 3rem;
  height: 0.2rem;
  background-color: burlywood;
}
.parent {
  display: flex;
  flex-direction: row;
  gap: 0;
  justify-items: center;

  width: max-content;
  margin: 0 auto;
}
.bottomForm {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
</style>
