<script setup>
import { ref } from 'vue'
const props = defineProps({
  id: { type: [String], required: true },
  name: { type: [String], required: true },
  type: {
    type: [String],
    required: true,
    validator: (value, props) => {
      return ['password', 'text', 'email'].includes(value)
    }
  },
  label: { type: [String] },
  placeholder: {
    type: [String]
  }
})

const type = ref(props.type)
const modelValue = defineModel()

const toggle = () => {
  console.log(type.value)
  type.value = type.value === 'password' ? 'text' : 'password'
}
</script>

<template>
  <div class="outer">
    <label :for="id" v-if="label">
      {{ label }}
    </label>
    <div class="inputParent">
      <input
        :id="id"
        :name="name"
        :type="type"
        :spellcheck="true"
        v-model="modelValue"
        :placeholder="placeholder"
      />
      <!-- <button v-if="props.type === 'password'" @click="toggle">toggle</button> -->
    </div>
  </div>
</template>
<style scoped>
input {
  outline: none;
  border-radius: 0.5rem;
  padding: 0.3rem;
  border-style: solid;
  border-width: 0.1rem;
  border-color: gray;
  background-color: transparent;
  color: wheat;
  width: 100%;
}
.outer {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  height: 100%;
}
.inputParent {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: 100%;
  width: 100%;
}
button {
  background-color: gray;
  color: wheat;
  border-radius: 0.6rem;
  padding: 0.4rem 2rem;
  outline: none;
  border: none;
  font-size: small;
  font-weight: 500;
  text-transform: capitalize;
}
button:hover {
  background-color: gray;
  opacity: 80%;
  cursor: pointer;
}
label {
  font-size: small;
  font-weight: 500;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
}
</style>
