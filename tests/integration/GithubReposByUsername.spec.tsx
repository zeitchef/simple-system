import React from 'react'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import nock from 'nock'
import { MOCK_USER_WITH_REPOS, MOCK_RESPONSE } from '../fixtures/github'
import App from '../../src/App'
import '@testing-library/jest-dom'

describe('Fetch repos by Github username', () => {
  beforeAll(() => {
    nock('https://api.github.com')
      .persist()
      .get(`/users/${MOCK_USER_WITH_REPOS}/repos`)
      .query(true)
      .reply(200, MOCK_RESPONSE)
  })

  describe('Github user has repos', () => {
    test('Should return list of repos by username', async () => {
      render(<App />)
      const input: HTMLInputElement = screen.getByTestId('user-search-input')

      expect(input).toBeInTheDocument()
      await userEvent.type(input, MOCK_USER_WITH_REPOS)
      expect(input).toHaveValue(MOCK_USER_WITH_REPOS)
    })
  })
})
