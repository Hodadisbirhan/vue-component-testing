import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputField from '@/components/h/inputField.vue'

describe('Input Field', () => {
  it('render properly', () => {
    const wrapper = mount(InputField, {
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
})
