import { render } from '@testing-library/react'
import { CarbonUnit } from './index'

test('render <CarbonUnit /> without class name', () => {
  const { container } = render(<CarbonUnit />)
  expect(container.firstElementChild.classList.contains('ui-unit')).toBe(true)
  expect(container.textContent).toMatchInlineSnapshot(`"gCO2/kWh"`)
})

test('render <CarbonUnit /> with class name', () => {
  const className = 'main-wrap'
  const { container } = render(<CarbonUnit className={className} />)
  expect(container.firstElementChild.classList.contains('main-wrap')).toBe(true)
})
