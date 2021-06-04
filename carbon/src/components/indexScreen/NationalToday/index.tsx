import * as React from 'react'
import { Line } from 'react-chartjs-2'
import { options, ACTUAL_DATASET, FORECAST_DATASET, LABLES } from './options'
import { useGetNationalTodayView } from '../../../hooks/carbon.hooks'
import { Spinner, ErrorWrap } from '../../common'
import './styles.scss'

interface DataSet {
  label: string
  data: number[]
  fill: boolean
  backgroundColor: string
  borderColor: string
}

interface LineChartData {
  labels: string[]
  datasets: DataSet[]
}

export const NationalToday: React.FC = () => {
  const [lineData, setLineData] = React.useState<LineChartData>({
    labels: [],
    datasets: [],
  })
  const { status, data } = useGetNationalTodayView()

  React.useEffect(() => {
    if (status === 'success') {
      const { forecast, actual } = data
      setLineData({
        labels: LABLES,
        datasets: [
          { ...FORECAST_DATASET, data: forecast },
          { ...ACTUAL_DATASET, data: actual },
        ],
      })
    }
  }, [data, status])

  return (
    <div className="national-today ui-themed ui-card">
      <h4>National Overview</h4>
      <div>
        {['loading', 'idel'].includes(status) ? (
          <Spinner />
        ) : status === 'success' ? (
          <Line data={lineData} options={options} type="line" />
        ) : (
          <ErrorWrap>
            <h4>Failed to load data</h4>
          </ErrorWrap>
        )}
      </div>
    </div>
  )
}

export default React.memo(NationalToday)
