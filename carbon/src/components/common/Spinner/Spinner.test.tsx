import { render, screen } from '@testing-library/react'
import { Spinner } from '.'

test('<Spinner /> should have aria-label loading', () => {
  render(<Spinner />)
  expect(screen.queryByLabelText(/loading/i)).toBeInTheDocument()
})

test('render <Spinner /> without providing spinner size', () => {
  render(<Spinner />)
  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()
  expect(
    screen.getByLabelText(/loading/i).classList.contains('ui-spinner--medium')
  ).toBe(true)
})

test('render <Spinner /> with spinner size large', () => {
  render(<Spinner size="large" />)
  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()
  expect(
    screen.getByLabelText(/loading/i).classList.contains('ui-spinner--large')
  ).toBe(true)
})

test('render <Spinner /> with fullscreen', () => {
  render(<Spinner fullscreen={true} />)
  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()
  expect(
    screen
      .getByLabelText(/loading/i)
      .classList.contains('ui-spinner--fullscreen')
  ).toBe(true)
})
