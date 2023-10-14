import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {submitForm as mockSubmitForm} from '../api'
import App from '../app'

jest.mock('../api')

test('Can fill out a form across multiple pages', async () => {
  mockSubmitForm.mockResolvedValueOnce({success: true})
  const testData = {food: 'test food', drink: 'test drink'}
  render(<App />)
  userEvent.click(await screen.findByText(/fill.*form/i))
  userEvent.type(await screen.findByLabelText(/food/i), testData.food)

  userEvent.click(await screen.findByText(/next/i))
  userEvent.type(await screen.findByLabelText(/drink/i), testData.drink)

  userEvent.click(await screen.findByText(/review/i))

  userEvent.click(await screen.findByText(/confirm/i, {selector: 'button'}))
  await screen.findByText(/congrats/i)

  userEvent.click(await screen.findByText(/go home/i))
  expect(await screen.findByText(/welcome home/i)).toBeInTheDocument()
  expect(mockSubmitForm).toHaveBeenCalledWith(testData)
  expect(mockSubmitForm).toHaveBeenCalledTimes(1)
})
