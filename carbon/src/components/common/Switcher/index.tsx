import clsx from 'clsx'
import * as React from 'react'
import './styles.scss'

interface SwithcherProps {
  onChange?: (value: boolean) => void
  defaultIsOn?: boolean
  className?: string
}
const Switcher: React.FC<SwithcherProps> = ({
  onChange,
  defaultIsOn,
  className,
}) => {
  const [on, setIsOn] = React.useState<boolean>(defaultIsOn)

  // avoid the onChange to be called at the first time monunted
  const renderRef = React.useRef<number>(-1)
  React.useEffect(() => {
    renderRef.current = 0
    return () => {
      renderRef.current = -1
    }
  }, [])
  React.useEffect(() => {
    if (renderRef.current && onChange) {
      onChange(on)
    }
    renderRef.current = 1
  }, [on, onChange])

  const handleClick = () => {
    setIsOn((on) => !on)
    return false
  }

  const clsxName = clsx(
    'ui-switcher ui-themed',
    { 'ui-switcher--active': on },
    className
  )
  
  return (
    <button aria-label="switcher" className={clsxName} onClick={handleClick}>
      <span></span>
    </button>
  )
}

export default React.memo(Switcher)
