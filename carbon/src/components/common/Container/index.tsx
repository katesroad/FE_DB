import * as React from 'react'
import clsx from 'clsx'
import './styles.scss'

interface ContainerProps {
  className?: string
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  const clsxNames = clsx('ui-container', className)
  return <div className={clsxNames}>{children}</div>
}
