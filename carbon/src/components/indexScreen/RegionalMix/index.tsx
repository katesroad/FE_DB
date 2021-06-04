import * as React from 'react'
import { useGetRegionCarbonCurrent } from '../../../hooks/carbon.hooks'
import { ErrorWrap, Spinner } from '../../common'
import { Pie } from 'react-chartjs-2'
import { MIX_LABLES, MIX_PIE_SETTING } from '../../../constant/chart'

interface MixItem {
  perc: number
  fuel: string
}

const RegionalMix: React.FC<{ id: string | number }> = ({ id }) => {
  const { status, data } = useGetRegionCarbonCurrent(id)
  const [generationmix, setGenerationMix] = React.useState<number[]>([])

  React.useEffect(() => {
    if (status === 'success' && data?.length) {
      const region = data[0].data[0]
      setGenerationMix(() => {
        const { generationmix: rawGenerationMix } = region
        return rawGenerationMix.map((item: MixItem) => item.perc)
      })
    }
  }, [status, data, id])
  const pieData = React.useMemo(
    () => ({
      labels: MIX_LABLES,
      datasets: [
        {
          data: generationmix,
          ...MIX_PIE_SETTING,
        },
      ],
    }),
    [generationmix]
  )

  return ['loading', 'idel'].includes(status) ? (
    <Spinner size="small" />
  ) : status === 'success' ? (
    <Pie data={pieData} type="pie" />
  ) : (
    <ErrorWrap>Failed to load generation mix for region#{id}.</ErrorWrap>
  )
}

export default React.memo(RegionalMix)
