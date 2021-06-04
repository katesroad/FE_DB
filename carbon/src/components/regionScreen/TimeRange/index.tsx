import clsx from 'clsx'
import * as React from 'react'
import DatePicker from 'react-datepicker'
import './styles.scss'

interface TimeRangeProps {
  onChange: (dates: [starDate: string, endDate: string]) => void
  maxDate: Date
  minDate?: Date
  start?: Date
  end?: Date
  className?: string
}

const TimeRange: React.FC<TimeRangeProps> = ({
  onChange,
  start,
  end,
  maxDate,
  className,
}) => {
  const [startDate, setStartDate] = React.useState(
    new Date(start || Date.now())
  )
  const [endDate, setEndDate] = React.useState(new Date(end || maxDate))
  const handleChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    onChange(dates)
  }

  return (
    <div className={clsx('date-range', className)}>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        maxDate={maxDate}
        selectsRange
        withPortal
      />
    </div>
  )
}

export default React.memo(TimeRange)
