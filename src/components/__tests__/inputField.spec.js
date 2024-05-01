import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputField from '@/components/h/inputField.vue'
const factory = (props) => {
  return mount(InputField, props)
}
describe('Input Field', () => {
  it('render properly', () => {
    const wrapper = factory({
      props: {
        id: 'name',
        name: 'First Name',
        placeholder: 'First Name',
        label: 'First Name',
        type: 'text'
      }
    })

    expect(wrapper.text()).toContain('First Name')
  })
  it('checking the input field with id', () => {
    const wrapper = factory({
      props: {
        id: 'name',
        name: 'First Name',
        placeholder: 'First Name',
        label: 'First Name',
        type: 'text'
      }
    })
    expect(wrapper.html()).toContain('First Name')
  })
})
