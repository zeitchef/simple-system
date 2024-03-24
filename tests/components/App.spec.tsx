import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../../src/App'

describe('App', () => {
  test('Renders app properly', () => {
    const wrapper = render(<App />)
    expect(wrapper).toBeTruthy()

    const h1 = wrapper.container.querySelector('h1')
    expect(h1?.textContent).toBe('Github User Search')

    const text = screen.getByText(/Happy searching!/i)
    expect(text.textContent).toBeTruthy()
  })
})
