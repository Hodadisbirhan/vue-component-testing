<script setup lang="ts">
import HField from '@/components/h/inputField.vue'
import { ref, inject } from 'vue'
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
const addList = () => {
  if (!doing.value) return
  lists.value.push({ created_at: new Date(), name: doing.value })
  doing.value = ''
}
const { name } = object
const r = ref({ samsone: ref('hodadis') })
let { samsone } = r.value
</script>

<template>
  <div class="parent">
    <div class="parentInner">
      <HField id="name" name="name" type="text" v-model="doing" placeholder="hodadis" />
      {{ das }}

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
