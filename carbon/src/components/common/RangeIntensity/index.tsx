import * as React from 'react'
import { Spinner, ErrorWrap } from 'components/common'
import { UseQueryResult } from 'react-query'
import { Line } from 'react-chartjs-2'
import './styles.scss'

interface RegionCarbonData {
  intensity: { forecast: number }
  from: string
  to: string
}

interface IntensityProps {
  type?: 'week' | 'month'
  queryResult: UseQueryResult<{ data: RegionCarbonData[] | null }>
}

interface ChartData {
  labels: string[]
  datasets: [
    {
      label: string
      fill: false
      data: number[]
      backgroundColor: string
      borderColor: string
    }
  ]
}

export const RangeIntensity: React.FC<IntensityProps> = React.memo(
  ({ type, queryResult }) => {
    const { status, data } = queryResult
    const [chartStateData, setChartStateData] = React.useState<ChartData>(
      () => {
        return {
          labels: [],
          datasets: [
            {
              label: `Last  %{type}`,
              data: [],
              fill: false,
              backgroundColor: 'rgb(54, 162, 235)',
              borderColor: 'rgb(89, 100, 224)',
            },
          ],
        }
      }
    )
    React.useEffect(() => {
      if (status === 'success' && data) {
        const carbonData = data.data
        const store: Record<string, number[]> = {}
        carbonData?.forEach(({ intensity: { forecast }, from }) => {
          const date = new Date(from).toLocaleDateString()
          if (store[date]) {
            store[date].push(forecast)
          } else {
            store[date] = [forecast]
          }
        })
        const labels = Object.keys(store)
        const chartData = Object.keys(store).map((key) => {
          const statsList = store[key]
          const len = statsList.length
          const total = statsList.reduce((a, v) => a + v)
          const avg = Math.floor(total / len)
          return avg
        })
        const {
          datasets: [{ data: oldData, ...rest }],
        } = chartStateData
        setChartStateData({
          labels,
          datasets: [
            {
              ...rest,
              data: chartData,
              label: type ? `Last ${type}` : 'carbon intensity',
            },
          ],
        })
      }
      // eslint-disable-next-line
    }, [status, data, type])

    return (
      <div className="range-intensity">
        {['loading', 'idel'].includes(status) ? (
          <Spinner />
        ) : status === 'success' ? (
          // setup chart options doesn't work
          <>
            <Line type="line" data={chartStateData} />
            <p className="tip-text">
              <small>Average intenisty for each day.</small>
            </p>
          </>
        ) : (
          <ErrorWrap>Failed to load data</ErrorWrap>
        )}
      </div>
    )
  }
)
