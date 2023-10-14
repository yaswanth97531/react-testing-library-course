import React from 'react'
import {render, screen} from '@testing-library/react'

import {Editor} from '../post-editor-01-markup'

test('renders a form with title, content, tags, and a submit button', () => {
  render(<Editor />)
  expect(screen.getByLabelText(/title/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/content/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/tags/i)).toBeInTheDocument()
  expect(screen.getByText(/submit/i)).toBeInTheDocument()
})
