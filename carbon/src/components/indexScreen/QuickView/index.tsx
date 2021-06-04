import clsx from 'clsx'
import * as React from 'react'
import {
  useGetNationalTodayView,
  useGetNationalCurrentIndensity,
} from '../../../hooks/carbon.hooks'
import { ErrorWrap, Spinner } from '../../common'
import { CarbonUnit } from '../../common/CarbonUnit'
import './styles.scss'

export const QuickView: React.FC<{ className?: string }> = ({ className }) => {
  const today = new Date().toLocaleDateString()
  const { status, data } = useGetNationalCurrentIndensity()
  const [intensity, setIntensity] =
    React.useState<{ actual: number; forecast: number } | null>(null)

  React.useEffect(() => {
    if (status === 'success' && data?.length) {
      setIntensity(data[0].intensity)
    }
  }, [status, data])

  const {
    data: { overall },
    status: overallStatus,
  } = useGetNationalTodayView()

  return (
    <div className={clsx('quick-view ui-themed ui-card', className)}>
      <h2>
        {today}
        {['loading', 'idel'].includes(status) ? <Spinner size="small" /> : null}
      </h2>

      {status === 'success' ? (
        <div className="quick-view__data">
          <p>
            <strong>Overall:</strong>
            <span>
              {overallStatus === 'success' ? <>{overall}</> : null}
              <CarbonUnit />
            </span>
          </p>
          <p>
            <strong>Current:</strong>
            <span>
              {intensity?.actual} <CarbonUnit />
            </span>
          </p>
        </div>
      ) : null}
      {status === 'error' ? (
        <ErrorWrap>Failed to load current carbon intensity data.</ErrorWrap>
      ) : null}
    </div>
  )
}

export default React.memo(QuickView)
