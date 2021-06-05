import * as React from 'react'
import { useGetRegionsCarbon } from 'hooks/carbon.hooks'
import { Spinner, ErrorWrap } from 'components/common'
import { AiOutlineStock } from 'react-icons/ai'
import { BiSortDown, BiSortUp } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { CarbonUnit } from 'components/common/CarbonUnit'
import { RegionPanel } from '../RegionPanel'
import './styles.scss'

interface RegionCarbonData {
  intensity: { forecast: number; index: string }
  name: string
  id: number
  dnoregion: string
}

interface RegionItem extends Pick<RegionCarbonData, 'intensity' | 'dnoregion'> {
  shortname: string
  regionid: number
}

const RegionsCarbon: React.FC = () => {
  const now = new Date()
  /**
   * The best way to initialize a javascript date to midnight
   * Link: https://stackoverflow.com/questions/3894048/what-is-the-best-way-to-initialize-a-javascript-date-to-midnight
   */
  const todayMidnight = new Date(now)
  todayMidnight.setHours(0, 0, 0)
  const from = todayMidnight.toISOString()
  const { status, data } = useGetRegionsCarbon({ from, to: now.toISOString() })
  const [isAsc, setIsAsc] = React.useState<boolean>(false)

  const [isClicked, setisClicked] = React.useState<boolean>(false)
  const handleClickIntenisty = () => {
    setisClicked(true)
    setIsAsc((isAsc) => !isAsc)
    return false
  }

  // how many records do we have so far from midinight
  const [recordSize, setRecordSize] = React.useState<number>(1)
  const [recordData, setRecordData] = React.useState<RegionCarbonData[]>([])
  React.useEffect(() => {
    // Data fetching has not been finished yet
    if (status === 'success' && data && data.length) {
      const regionsData: RegionCarbonData[] = []
      data.forEach(({ regions }: { regions: any[] }) => {
        regions.forEach(
          ({
            shortname: name,
            regionid: id,
            intensity,
            dnoregion,
          }: RegionItem) => {
            const recordInArray = regionsData[id - 1]
            if (recordInArray) {
              recordInArray.intensity.forecast += intensity.forecast
            } else {
              regionsData[id - 1] = { id, intensity, name, dnoregion }
            }
          }
        )
        setRecordData(regionsData)
        setRecordSize(data.length)
      })
    }
  }, [status, data])

  const records = React.useMemo(() => {
    if (!isClicked) return recordData
    if (isAsc) {
      return recordData.sort((a, b) => {
        return a.intensity.forecast - b.intensity.forecast
      })
    } else
      return recordData.sort((a, b) => {
        return b.intensity.forecast - a.intensity.forecast
      })
  }, [isAsc, recordData, isClicked])

  // to get selected region when clicking view button
  const [activeRegion, setActiveRegion] = React.useState({ name: '', id: 0 })
  const onClose = () => {
    setActiveRegion({ id: 0, name: '' })
  }
  const getClickHandler = ({ id, name }: RegionCarbonData) => {
    return () => {
      setActiveRegion({ id, name })
      setIsAsc((isAsc) => !isAsc)
      return false
    }
  }

  return (
    <div className="regions-carbon ui-themed ui-card">
      <h4>Regional Overview</h4>
      <table className="regions-carbon__data-table ui-card">
        <thead>
          <tr>
            <td>region</td>
            <td>
              <p
                role="button"
                aria-labelledby="sort-intensity"
                onClick={handleClickIntenisty}
              >
                <span>intensity</span>
                {isClicked ? isAsc ? <BiSortUp /> : <BiSortDown /> : null}
              </p>
            </td>
            <td>History data</td>
          </tr>
        </thead>
        <tbody>
          {records.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={`/regions/${item.id}`}>
                  <span title={item.name}>{item.name}</span>
                </Link>
              </td>
              <td>
                <p>
                  {/* 24 hours contains 48 half-hours */}
                  <span className="carbon-value">
                    {(item.intensity.forecast / recordSize).toFixed(2)}
                  </span>
                  <small className="carbon-unit">
                    <CarbonUnit />
                  </small>
                </p>
              </td>
              <td>
                <button
                  aria-labelledby="view-past"
                  className="ui-button"
                  onClick={getClickHandler(item)}
                >
                  view <AiOutlineStock />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* to render region data fetched by clicking view button */}
      {activeRegion.id ? (
        <RegionPanel {...activeRegion} onClose={onClose} />
      ) : null}

      {/* show loading spinner */}
      {['loading', 'idel'].includes(status) ? <Spinner /> : null}

      {/* show loading data failed text */}
      {status === 'error' ? (
        <ErrorWrap className="fetch-error">
          <h4>Something went wrong</h4>
          <p>Loading regions' carbon data failed</p>
          <button>retry</button>
        </ErrorWrap>
      ) : null}
    </div>
  )
}

export default React.memo(RegionsCarbon)
