import * as React from 'react'

type setModeType = () => void
type ThemeContextType = {
  mode: string
  toggleTheme: setModeType
}

const THEME_KEY = 'app_theme_mode'
const THEME_MODE: Record<string, string> = { light: 'light', dark: 'dark' }
const ThemeContext = React.createContext<ThemeContextType | null>(null)
ThemeContext.displayName = 'ThemeContext'

const ThemeProvider: React.FC = (props) => {
  const [mode, setMode] = React.useState<string>(() => {
    try {
      return window.localStorage.getItem(THEME_KEY) || THEME_MODE.dark
    } catch (e) {
      return THEME_MODE.dark
    }
  })
  React.useEffect(() => {
    window.localStorage.setItem(THEME_KEY, mode)
    document.body.dataset.theme = mode
  }, [mode])

  const toggleTheme = function () {
    if (mode === THEME_MODE.dark) setMode(THEME_MODE.light)
    else setMode(THEME_MODE.dark)
  }

  const value = React.useMemo(
    () => ({ mode, toggleTheme }),
    [mode, toggleTheme]
  )
  return <ThemeContext.Provider value={value} {...props} />
}

function useTheme(): ThemeContextType | never {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error(`Using useTheme outside of <ThemeProvider />`)
  }
  return context
}

export { ThemeProvider, useTheme, THEME_MODE }
