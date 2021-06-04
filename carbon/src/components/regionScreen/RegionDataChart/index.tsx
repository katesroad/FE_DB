import { RangeIntensity } from 'components/common/RangeIntensity'
import TimeRange from 'components/regionScreen/TimeRange'
import { ONE_DAY } from 'constant/time'
import { useGetRegionHistoryCarbon } from 'hooks/carbon.hooks'
import { ITimeRange } from 'interfaces'
import * as React from 'react'
import { CarbonUnit } from 'components/common/CarbonUnit'
import { VscLoading } from 'react-icons/vsc'
import RegionSelect from '../RegionSelect'
import './styles.scss'

export default function RegionDataChart({ id }: { id: number | string }) {
  // According to the doc,the maxium forecast date is two days later of day
  const now = Date.now()
  const maxDate = new Date(now + 2 * ONE_DAY)
  const startDate = new Date(now - 7 * ONE_DAY)
  const endDate = new Date(now + 7 * ONE_DAY)
  const [range, setRange] = React.useState<ITimeRange>({
    from: startDate.toISOString(),
    to: endDate.toISOString(),
  })
  const onChange = (args: string[]) => {
    const [d1, d2] = args
    const notValid =
      new Date(d2).getTime() - new Date(d1).getTime() > 60 * ONE_DAY
    if (notValid) {
      // API provider doesn't support selecting large than 60 days.
      window.alert(
        'You selected range more than 60 days. Which will not be supported'
      )
      return
    }
    if (d1 && d2) {
      setRange({
        from: new Date(d1).toISOString(),
        to: new Date(d2).toISOString(),
      })
    }
  }
  const queryResult = useGetRegionHistoryCarbon({ id, range })
  const { status, data } = queryResult
  const [overall, setOverall] = React.useState<number>(0)
  React.useEffect(() => {
    if (status === 'success' && data?.data?.length) {
      let overall = 0
      data.data.forEach(({ intensity: { forecast: v } }) => {
        overall += v
      })
      setOverall(overall)
    }
  }, [status, data])

  return (
    <div className="region-chart">
      {/* select time range and region id */}
      <div className="region-chart__filter">
        <div className="filter">
          <strong className="filter-label"> Select Region:</strong>
          <RegionSelect value={id} />
        </div>
        <div className="filter filter--time">
          <strong className="filter-label">Select Time:</strong>
          <TimeRange
            onChange={onChange}
            maxDate={maxDate}
            start={startDate}
            end={endDate}
          />
        </div>
      </div>

      {/* for showing overall carbon intensity */}
      <p className="region-chart__overall">
        <span>Overall:</span>
        {['loading', 'idel'].includes(status) ? (
          <VscLoading />
        ) : status === 'success' ? (
          <span>{overall}</span>
        ) : null}
        <span>
          <CarbonUnit />
        </span>
      </p>

      {/* for showing chart */}
      <RangeIntensity queryResult={queryResult} />
    </div>
  )
}
