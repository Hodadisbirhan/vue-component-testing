<script setup lang="ts">
import HField from '@/components/h/inputField.vue'
import { ref, inject } from 'vue'
import Stepper from '@/components/h/stepper.vue'
import HSelect from '@/components/h/select.vue'
const data = ref<stringe>('Show')
const doing = ref('')
const lists = ref([])
const object = { name: ref(1) }
const das = inject('name')
let names: number[] = []
enum Size {
  small = 1,
  medium = 2,
  large = 3
}

const step = [
  { title: 'm', id: 1 },
  { title: 'l', id: 2 }
]

const addList = () => {
  if (!doing.value) return
  lists.value.push({ created_at: new Date(), name: doing.value })
  doing.value = ''
}

const currentStep = ref(step[0].id)
const updateStep = (value) => {
  currentStep.value = value
  console.log(currentStep.value)
}

const select = ref('et')
const listValue = [
  { value: 'et', text: 'Ethiopia' },
  { value: 'us', text: 'USA' },
  { value: 'israel', text: 'Israel' }
]

const { name } = object
const r = ref({ samsone: ref('hodadis') })
let { samsone } = r.value
</script>

<template>
  <div class="parent">
    <div class="parentInner">
      <HField id="name" name="name" type="text" v-model="doing" placeholder="hodadis" />
      {{ das }}
      {{ select }}
      <HSelect :list-value="listValue" v-model="select" label="Select Country"></HSelect>
      <Stepper :name="step" @update:step="updateStep">
        <template #m="{ index }">
          <template v-if="index.id === currentStep">
            <HField
              id="s"
              name="s"
              type="text"
              v-model="doing"
              placeholder="please add the Value"
            />
            <HField id="name" name="name" type="text" v-model="doing" placeholder="hodadis" />
          </template>
        </template>

        <template #l="{ index }">
          <template v-if="index.id === currentStep">
            <HField
              id="pass"
              name="pass"
              type="password"
              v-model="doing"
              placeholder="what is the password Value"
            />
            <HField id="email" name="email" type="email" v-model="doing" placeholder="email" />
          </template>
        </template>
      </Stepper>

      <button @click="addList">+ Add Task</button>
    </div>
    {{ name + 1 }}{{ r.samsone }}
    <ul>
      <li v-for="list in lists" :key="list.created_at">
        <span>{{ list.created_at }}</span>

        <p>{{ list.name }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
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
  text-align: center;
  min-width: fit-content;
}
button:hover {
  background-color: gray;
  opacity: 80%;
  cursor: pointer;
}

.parentInner {
  display: flex;
  justify-content: stretch;

  flex-direction: row;
  gap: 1rem;
  width: 100%;

  height: 3rem;
}

.parent {
  width: 100%;
  gap: 4rem;
  display: flex;

  flex-direction: column;
}

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-height: 20rem;
  overflow-y: auto;
  gap: 1rem;
  width: 100%;
  padding: 0;
}

li {
  list-style: none;
  background-color: rgb(13, 13, 29);
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 0.1rem solid slategray;
  border-radius: 1rem;
  padding: 1rem 3rem;
}
</style>
