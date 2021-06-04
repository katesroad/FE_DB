import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from '.'
import { ThemeProvider, THEME_MODE } from 'context/theme.context'
import userEvent from '@testing-library/user-event'

const { light, dark } = THEME_MODE
const today = new Date().toLocaleDateString()

const renderHeader = (pathname: string) => {
  return render(
    <MemoryRouter initialEntries={[{ pathname }]}>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </MemoryRouter>
  )
}

test('<Header /> should support switch theme mode by clicking button', () => {
  const { container } = renderHeader('/')

  // default theme
  expect(within(container).getByRole('button')).toHaveTextContent(light)

  // light theme has dark text
  userEvent.click(within(container).getByRole('button'))
  expect(within(container).getByRole('button')).toHaveTextContent(dark)

  // dark theme have light text
  userEvent.click(within(container).getByRole('button'))
  expect(within(container).getByRole('button')).toHaveTextContent(light)
})

test('render <Header /> at / path(home page)', () => {
  renderHeader('/')

  // epexct the logo only have text content at home page
  expect(
    screen.queryByRole('link', { name: 'go-home' })
  ).not.toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /UK carbon/i })
  ).toBeInTheDocument()

  expect(screen.queryByText(today)).not.toBeInTheDocument()
})

test('render header at other pages', () => {
  renderHeader('/others')

  // epexct the logo only have text content at home page
  expect(screen.getByRole('link', { name: /go-home/i })).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /UK carbon/i })
  ).toBeInTheDocument()

  expect(screen.queryByText(today)).toBeInTheDocument()
})
