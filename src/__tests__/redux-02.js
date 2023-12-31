import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {Counter} from '../redux-counter'
import {store as appStore} from '../redux-store'
import {reducer} from '../redux-reducer'

test('can render with redux with defaults', () => {
  render(
    <Provider store={appStore}>
      <Counter />
    </Provider>,
  )
  userEvent.click(screen.getByText('+'))
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1')
})

test('can render with redux with custom initial state', () => {
  const store = createStore(reducer, {count: 4})
  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  )
  userEvent.click(screen.getByText('-'))
  expect(screen.getByLabelText(/count/i)).toHaveTextContent('3')
})
