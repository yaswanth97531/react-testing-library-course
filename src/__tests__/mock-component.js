import React from 'react'
import {render, screen} from '@testing-library/react'
import {HiddenMessage} from '../hidden-message'

jest.mock('react-transition-group', () => {
  return {
    CSSTransition: (props) => (props.in ? props.children : null),
  }
})

test('show hidden message when toggle is clicked', () => {
  const myMessage = 'hello world'
  render(<HiddenMessage>{myMessage}</HiddenMessage>)
  const toggleButton = screen.getByText(/toggle/i)
  expect(screen.queryByText(myMessage)).not.toBeInTheDocument()
  toggleButton.click()
  expect(screen.getByText(myMessage)).toBeInTheDocument()
  toggleButton.click()
  expect(screen.queryByText(myMessage)).not.toBeInTheDocument()
})
