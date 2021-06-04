import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ErrorBoundaryProvider } from '.'

const errorMsg = 'We have a bug!!!'
const EleMayHaveError = () => {
  throw new Error(errorMsg)
}
const renderUI = (ui: React.ReactElement, pathname: string) => {
  return render(
    <MemoryRouter initialEntries={[{ pathname }]}>
      <ErrorBoundaryProvider>{ui}</ErrorBoundaryProvider>
    </MemoryRouter>
  )
}

test('use <ErrorBoundary /> at home page', () => {
  const { container } = renderUI(<EleMayHaveError />, '/')
  expect(
    screen.queryByRole('link', { name: /to go home/i })
  ).not.toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

test('use <ErrorBoundary /> at other pages', () => {
  const { container } = renderUI(<EleMayHaveError />, '/regions')
  expect(
    screen.queryByRole('link', { name: /to go home/i })
  ).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
