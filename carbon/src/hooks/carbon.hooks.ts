import { useQuery, UseQueryResult } from 'react-query'
import { ITimeRange, ICarbonData, INationalTodayData } from '../interfaces'
import client from './client'
import * as React from 'react'

/**
 * Get all carbon intensity for all regions by time range
 * Doc: https://carbon-intensity.github.io/api-definitions/#get-intensity-from-to
 * @params {{from:ISOTimeString, to:ISOTimestring}} -ragne time range
 * @return array value or undefined
 */
export function useGetRegionsCarbon(
  range: ITimeRange
): UseQueryResult<any[] | undefined> {
  const { from, to } = range
  const queryFn = () => client(`/regional/intensity/${from}/${to}`)
  const queryKey = ['regional', 'today']
  return useQuery({ queryKey, queryFn })
}

// Get national level current intenstity for current half hour
export function useGetNationalCurrentIndensity(): UseQueryResult<
  any[] | undefined
> {
  const queryKey = ['national', 'current']
  const queryFn = () => client('/intensity')
  return useQuery({ queryKey, queryFn })
}

// Get  the national carbon intensity of today
function useGeNationalCarbonOfToday(): UseQueryResult<ICarbonData[] | null> {
  const queryKey = ['national', 'today']
  const queryFn = () => client('/intensity/date')
  return useQuery({ queryKey, queryFn })
}

/**
 * Get the  national line chart data of  today
 * and get the overall national intensityof today
 */
export function useGetNationalTodayView(): {
  status: string
  data: INationalTodayData
} {
  const { data, status, isSuccess } = useGeNationalCarbonOfToday()
  const [overviewData, setOverviewData] = React.useState<INationalTodayData>({
    forecast: [],
    actual: [],
    overall: 0,
  })
  React.useEffect(() => {
    if (isSuccess) {
      let actualHalf: number = 0
      let forecastHalf: number = 0
      const actualArray: number[] = []
      const forecastArray: number[] = []
      let overall = 0
      data?.forEach((item: any, index: number) => {
        const { actual, forecast } = item.intensity
        // as the forecast data has not happened yet when calculating
        overall += actual
        if (index % 2) {
          if (actualHalf) {
            actualHalf += actual || 0
            actualArray.push(Math.floor(actualHalf / (actual ? 2 : 1)))
          }
          forecastHalf += forecast || 0
          forecastArray.push(Math.floor(forecastHalf / 2))
        } else {
          actualHalf = actual || 0
          forecastHalf = forecast
        }
      })
      setOverviewData({
        actual: actualArray,
        forecast: forecastArray,
        overall,
      })
    }
  }, [data, isSuccess])

  const overview = React.useMemo(() => {
    return overviewData
  }, [overviewData])

  return { status, data: overview }
}

/**
 * Get the historical carbon data for a region weekly or monthly
 * @param{{id:string|number; range:{from:ISOTimeString, to:ISOTimeString}, type:string}}
 * @returns any[] historical data
 */
export function useGetRegionHistoryCarbon(query: {
  id: string | number
  range: ITimeRange
  type?: 'week' | 'month'
}): UseQueryResult<{ data: any[] }> {
  const {
    id,
    range: { from, to },
    type,
  } = query
  const queryKey = ['regional', id, type, from, to]
  const queryFn = () => {
    return client(`/regional/intensity/${from}/${to}/regionid/${id}`)
  }
  return useQuery({ queryKey, queryFn })
}

// Get current carbon intenisty data for region by its id
export function useGetRegionCarbonCurrent(
  regionId: string | number
): UseQueryResult<any[] | null> {
  const queryFn = () => client(`regional/regionid/${regionId}`)
  const queryKey = ['regional', 'current', regionId]
  return useQuery({ queryFn, queryKey })
}
