import * as React from 'react'
import { useParams } from 'react-router'
import { DocTitle } from '../components/common/DocTitle'
import NotFound from '../components/regionScreen/NotFound'
import { REGION_LIST } from '../constant/regions'
import RegionDataChart from 'components/regionScreen/RegionDataChart'

export default function RegionDetailScreen() {
  const { id } = useParams<{ id: string }>()
  const [regionName, setRegionName] = React.useState<string>(() => {
    const region = REGION_LIST.find((item) => item.id === +id)
    if (region) return region.name
    else return 'Carbon Intensity'
  })
  React.useEffect(() => {
    const region = REGION_LIST.find((item) => item.id === +id)
    if (region) setRegionName(region.name)
    else setRegionName('')
  }, [id])

  return (
    <div>
      <DocTitle title={regionName} />
      {regionName ? (
        <>
          <h2>{regionName}</h2> <RegionDataChart id={id} />
        </>
      ) : (
        <NotFound id={id} />
      )}
    </div>
  )
}
