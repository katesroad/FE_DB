import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import NotFound from '.'

test('render <NotFound />', () => {
  const firstRegionId = 1
  const secondRegionId = 2
  const { container, rerender } = render(<NotFound id={firstRegionId} />, {
    wrapper: MemoryRouter,
  })
  expect(screen.getByRole('heading').textContent).toMatchInlineSnapshot(
    `"Can't find a region with id#1"`
  )
  rerender(<NotFound id={secondRegionId} />)
  expect(screen.getByRole('heading').textContent).toMatchInlineSnapshot(
    `"Can't find a region with id#2"`
  )

  expect(screen.getByRole('link')).toMatchInlineSnapshot(`
<a
  href="/"
>
  <svg
    fill="none"
    height="1em"
    stroke="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
  <span>
    Go To Home
  </span>
</a>
`)
  expect(screen.getByRole('link')).toHaveAttribute('href', '/')
})
