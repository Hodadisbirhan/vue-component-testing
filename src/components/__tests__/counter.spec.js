import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '@/components/h/counter.vue'

const factory = () => {
  return mount(Counter)
}

describe('counter', () => {
  test('checking Emiting', async () => {
    const wrapper = factory()

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('updateCounter')
  })
  test('checking  the argument of the event', () => {
    const wrapper = factory()
    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    const events = wrapper.emitted('updateCounter')
    console.log(events)
    expect(events).toHaveLength(2)
    expect(events[0]).toEqual([1])
    expect(events[1]).toEqual([2])
  })
})
