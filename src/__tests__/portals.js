import React from 'react'
import {render, screen, within} from '@testing-library/react'
import {Modal} from '../modal'

test('modal shows the children', () => {
  render(
    <>
      <div data-testid="foo" />
      <Modal>
        <div>test</div>
      </Modal>
    </>,
  )
  within(document.getElementById('modal-root'))
  expect(screen.getByText('test')).toBeInTheDocument()
})
