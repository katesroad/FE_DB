import { ErrorBoundaryProvider } from 'components/common'
import { useGetRegionCarbonCurrent } from 'hooks/carbon.hooks'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { VscLoading } from 'react-icons/vsc'
import * as React from 'react'
import { Link } from 'react-router-dom'
import HistoryIntensity from '../HistoryIntensity'
import RegionalMix from '../RegionalMix'
import { CarbonUnit } from 'components/common/CarbonUnit'
import Dialog from '@material-ui/core/Dialog'

import './styles.scss'

interface RegionPanelProps {
  name: string
  id: number
  onClose: () => void
}

interface IntensityState {
  forecast: number
  index: string
}

export const RegionPanel: React.FC<RegionPanelProps> = ({
  id,
  name,
  onClose,
}) => {
  const { status, data } = useGetRegionCarbonCurrent(id)
  const [intensity, setIntensity] = React.useState<IntensityState | null>(null)
  React.useEffect(() => {
    if (status === 'success' && data?.length) {
      try {
        const { intensity } = data[0].data[0] || ({} as any)
        if (intensity) setIntensity(intensity)
      } catch (e) {}
    }
  }, [status, data])

  const [isVisible, setIsVisible] = React.useState<boolean>(true)
  React.useEffect(() => {
    if (!isVisible) onClose()
  }, [isVisible, onClose])

  return (
    <Dialog
      open={isVisible}
      onClose={() => setIsVisible(false)}
      className="region-panel"
    >
      <div className="ui-themed ui-card">
        <button
          className="ui-button region-panel__close-btn"
          onClick={() => setIsVisible(false)}
        >
          x
        </button>

        <h4 className="region-panel__title">
          <span>{name}</span>
          <Link to={`/regions/${id}`}>
            Go to region <HiOutlineArrowRight />
          </Link>
        </h4>

        <div className="region-panel__intensity">
          <p>
            <span>Current:</span>
            {['loading', 'idel'].includes(status) ? (
              <VscLoading />
            ) : status === 'success' ? (
              <strong>
                {intensity?.forecast} <CarbonUnit />
              </strong>
            ) : null}
          </p>
          <p>
            <span>Degree:</span>
            {['loading', 'idel'].includes(status) ? (
              <VscLoading />
            ) : status === 'success' ? (
              <strong>{intensity?.index}</strong>
            ) : null}
          </p>
        </div>

        <div className="region-panel__content">
          <ErrorBoundaryProvider>
            <div className="region-panel__mix">
              <h6>Generation mix</h6>
              <RegionalMix id={id} />
            </div>
          </ErrorBoundaryProvider>
          <div className="region-panel__history">
            <h6>Historical data</h6>
            <HistoryIntensity id={id} />
          </div>
        </div>
      </div>
    </Dialog>
  )
}
