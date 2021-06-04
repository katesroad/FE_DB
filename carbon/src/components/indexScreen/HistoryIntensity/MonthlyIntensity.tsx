import * as React from 'react'
import { useGetRegionHistoryCarbon } from 'hooks/carbon.hooks'
import { RangeIntensity } from 'components/common/RangeIntensity'
import { ONE_DAY } from 'constant/time'

const ONE_MONTH = ONE_DAY * 30
const NOW = Date.now()

const mth = {
  from: new Date(NOW - ONE_MONTH).toISOString(),
  to: new Date(NOW).toISOString(),
}

export const MonthlyIntensity: React.FC<{ id: number }> = ({ id }) => {
  const query = { range: mth, id }
  const mthQueryResult = useGetRegionHistoryCarbon({ ...query, type: 'month' })
  return <RangeIntensity type="month" queryResult={mthQueryResult} />
}
