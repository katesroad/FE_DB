import { ONE_DAY } from 'constant/time'
import * as React from 'react'
import { useGetRegionHistoryCarbon } from 'hooks/carbon.hooks'
import { RangeIntensity } from 'components/common/RangeIntensity'

const ONE_WEEK = 7 * ONE_DAY
const NOW = Date.now()

const wk = {
  from: new Date(NOW - ONE_WEEK).toISOString(),
  to: new Date(NOW).toISOString(),
}

export const WeeklyIntensity: React.FC<{ id: number }> = ({ id }) => {
  const query = { id, range: wk }
  const wkQueryResult = useGetRegionHistoryCarbon({ ...query, type: 'week' })
  return <RangeIntensity type="week" queryResult={wkQueryResult} />
}
