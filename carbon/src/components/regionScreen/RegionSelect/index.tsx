import * as React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { REGION_LIST } from '../../../constant/regions'
import { useHistory } from 'react-router'
import clsx from 'clsx'
import './styles.scss'

const RegionSelect: React.FC<{ value: number | string; className?: string }> =
  ({ value, className }) => {
    const history = useHistory()
    const handleChange = (
      e: React.ChangeEvent<{ name?: string; value: unknown }>
    ) => {
      const { value: id } = e.target
      history.push(`/regions/${id}`)
    }
    return (
      <div className={clsx('region-select', className)}>
        <Select
          aria-label="regions-select"
          value={value}
          onChange={handleChange}
        >
          {REGION_LIST.map(({ id, name }) => {
            return (
              <MenuItem value={id} key={id} aria-label={name}>
                <span>{name}</span>
              </MenuItem>
            )
          })}
        </Select>
      </div>
    )
  }

export default React.memo(RegionSelect)
