import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Container } from 'components/common/Container'
import { useTheme, THEME_MODE } from 'context/theme.context'
import './styles.scss'

export const Header: React.FC = () => {
  const { pathname } = useLocation()
  const [isAtHome, setIsAtHome] = React.useState<boolean>(
    () => pathname === '/'
  )
  React.useEffect(() => {
    if (pathname === '/') setIsAtHome(true)
    else setIsAtHome(false)
  }, [pathname])

  const dateOfToday = new Date().toLocaleDateString()

  const { mode, toggleTheme } = useTheme()

  return (
    <header className="header ui-themed">
      <Container>
        {isAtHome ? (
          <h1>UK carbon</h1>
        ) : (
          <Link to="/" aria-label="go-home">
            <h1>UK carbon</h1>
          </Link>
        )}

        <p>
          {/* theme toggle button */}
          <button onClick={toggleTheme} aria-label="theme-switcher">
            {mode === THEME_MODE.light ? <FaMoon /> : <FaSun />}
            <span>
              {mode === THEME_MODE.light ? THEME_MODE.dark : THEME_MODE.light}
            </span>
          </button>

          {/* show today's date */}
          {isAtHome ? null : <small>{dateOfToday}</small>}
        </p>
      </Container>
    </header>
  )
}
