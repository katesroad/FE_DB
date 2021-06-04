import * as React from 'react'
import clsx from 'clsx'
import './styles.scss'

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large'
  fullscreen?: boolean
}

export const Spinner: React.FC<SpinnerProps> = ({ size, fullscreen }) => {
  const sizeName = size ? `ui-spinner--${size}` : 'ui-spinner--medium'
  const clsxName = clsx('ui-spinner', sizeName, {
    'ui-spinner--fullscreen': fullscreen,
  })
  return (
    <div className={clsxName} aria-label="loading">
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    </div>
  )
}
