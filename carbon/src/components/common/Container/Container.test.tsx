import { render } from '@testing-library/react'
import { Container } from './index'

test('render <Container /> without class name', () => {
  const { container } = render(<Container />)
  expect(container.firstElementChild.classList.contains('ui-container')).toBe(
    true
  )
})

test('render <Container /> with class name', () => {
  const className = 'main-wrap'
  const { container } = render(<Container className={className} />)
  expect(container.firstElementChild.classList.contains('main-wrap')).toBe(true)
})
