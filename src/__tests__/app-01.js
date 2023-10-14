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
  userEvent.click(screen.getByText(/fill.*form/i))
  userEvent.type(screen.getByLabelText(/food/i), testData.food)

  userEvent.click(screen.getByText(/next/i))
  userEvent.type(screen.getByLabelText(/drink/i), testData.drink)

  userEvent.click(screen.getByText(/review/i))

  userEvent.click(screen.getByText(/confirm/i, {selector: 'button'}))
  await screen.findByText(/congrats/i)

  userEvent.click(screen.getByText(/go home/i))
  expect(screen.getByText(/welcome home/i)).toBeInTheDocument()
  expect(mockSubmitForm).toHaveBeenCalledWith(testData)
  expect(mockSubmitForm).toHaveBeenCalledTimes(1)
})
