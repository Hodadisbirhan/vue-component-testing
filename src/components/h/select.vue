<script setup>
import { computed } from 'vue'

const props = defineProps({
  listValue: { type: [String, Number, Array, Object] },
  modelValue: {
    type: [String, Number],
    default: ''
  },

  label: { type: [String] }
})

const emits = defineEmits(['update:modelValue'])

const value = computed({
  get: () => {
    return props.modelValue
  },
  set: (newValue) => {
    emits('update:modelValue', newValue)
  }
})
</script>

<template>
  <div>
    <select v-model="value">
      <option value="" disabled>{{ label }}</option>
      <option
        v-for="val in listValue"
        :key="val.value"
        :value="val.value"
        :selected="val.value === 'us'"
      >
        <slot name="option" :value="val"></slot>
      </option>
    </select>
  </div>
</template>
<style scoped>
select {
  background-color: transparent;
  color: aliceblue;
  outline: none;
  border: 0.05rem solid aliceblue;
}
option {
  color: black;
  background-color: transparent;
}
</style>
