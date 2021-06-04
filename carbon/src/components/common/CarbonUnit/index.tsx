import clsx from 'clsx'
import * as React from 'react'
import './styles.scss'

interface CarbonUnitProps {
  className?: string
}

export const CarbonUnit: React.FC<CarbonUnitProps> = ({ className }) => {
  return (
    <b className={clsx('ui-unit', className)}>
      gCO<sub>2</sub>/kWh
    </b>
  )
}
