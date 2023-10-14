import React from 'react'
import {render} from '@testing-library/react'
import {axe} from 'jest-axe'

function InaccessibleForm() {
  return (
    <form>
      <input placeholder="email" />
    </form>
  )
}

test('the form is accessible', async () => {
  const {container} = render(<InaccessibleForm />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
