import * as React from 'react'
// import user from '@testing-library/user-event'
import user from '@testing-library/user-event'

import {render, screen} from '@testing-library/react'

import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error messages', () => {
  const {rerender} = render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i)
  user.type(input, '10')
  expect(screen.getByRole('alert')).toHaveTextContent(/the number is invalid/i)
  rerender(<FavoriteNumber max={10} />)
  expect(screen.queryByRole('alert')).not.toBeInTheDocument()
})

// disabling the rule for the purposes of the exercise
/*
eslint
  testing-library/no-debug: "off",
*/
