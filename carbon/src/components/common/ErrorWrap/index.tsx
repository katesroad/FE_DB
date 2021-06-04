import * as React from 'react'
import clsx from 'clsx'
import './styles.scss'

interface ErrorWrapProps {
  className?: string
}

export const ErrorWrap: React.FC<ErrorWrapProps> = ({
  children,
  className,
}) => {
  const clsxName = clsx('ui-error', className)
  return (
    <div role="alert" className={clsxName}>
      {children}
    </div>
  )
}
