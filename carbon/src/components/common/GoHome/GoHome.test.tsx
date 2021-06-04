import * as React from 'react'
import { render, screen, within } from '@testing-library/react'
import { GoHome } from './index'
import { MemoryRouter } from 'react-router'

test('render <GoHome /> without providing css  class name', () => {
  const { container } = render(<GoHome />, { wrapper: MemoryRouter })
  expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  expect(container).toMatchSnapshot()
})

test('render <GoHome /> css  class name', () => {
  const className = 'btn'
  const { container } = render(<GoHome className={className} />, {
    wrapper: MemoryRouter,
  })
  expect(within(container).getByRole('link').classList.contains(className))
})
