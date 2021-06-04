import Switcher from 'components/common/Switcher'
import * as React from 'react'
import { WeeklyIntensity } from './WeeklyIntensity'
import { MonthlyIntensity } from './MonthlyIntensity'
import './styles.scss'

interface HistoryInrtensityProps {
  id: number
}

export const HistoryIntensity: React.FC<HistoryInrtensityProps> = ({ id }) => {
  const [useWeeklyTab, setUseWeeklyTab] = React.useState<boolean>(true)

  return (
    <div className="history-intensity">
      <p className="range-switcher">
        <span>Last month</span>
        <Switcher
          onChange={(value) => setUseWeeklyTab(value)}
          defaultIsOn={useWeeklyTab}
        />
        <span>Last week</span>
      </p>
      {useWeeklyTab ? (
        <WeeklyIntensity id={id} />
      ) : (
        <MonthlyIntensity id={id} />
      )}
    </div>
  )
}

export default React.memo(HistoryIntensity)
