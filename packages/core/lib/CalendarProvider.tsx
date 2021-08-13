import React, { useCallback, useState } from 'react'

import { CalendarContext } from './Context'
import { ICalendar } from './types'

const Calendar: React.FC = ({ children }) => {
  const [data, setData] = useState<ICalendar>(() => {
    const currentDate = data && data.currentDate ? data.currentDate : new Date()

    return {
      mode: 'daily',
      currentDate,
      day: currentDate.getDate(),
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
    }
  })

  const updateCaledar = useCallback((calendar: ICalendar) => {
    console.log(calendar.month)
    setData(calendar)
  }, [])

  const handlePrev = useCallback(() => {
    const { mode, year, month, day, currentDate } = data
    switch (mode) {
      case 'daily':
        currentDate.setDate(currentDate.getDate() - 1)
        updateCaledar({
          ...data,
          currentDate,
          day: currentDate.getDate(),
          month: currentDate.getMonth(),
          year: currentDate.getFullYear(),
        })
        break
      case 'monthly':
        updateCaledar({
          ...data,
          day: 1,
          month: month < 1 ? 11 : month - 1,
          year: month < 1 ? year - 1 : year,
        })
        break
      case 'yearly':
        currentDate.setFullYear(year - 1)
        updateCaledar({ ...data, currentDate, year: currentDate.getFullYear() })
        break
      default:
        break
    }
  }, [data, updateCaledar])

  const handleNext = useCallback(() => {
    const { mode, year, month, day, currentDate } = data
    switch (mode) {
      case 'daily':
        currentDate.setDate(day + 1)
        updateCaledar({
          ...data,
          currentDate,
          day: currentDate.getDate(),
          month: currentDate.getMonth(),
          year: currentDate.getFullYear(),
        })
        break
      case 'monthly':
        updateCaledar({
          ...data,
          day: 1,
          month: month > 10 ? 0 : month + 1,
          year: month > 10 ? year + 1 : year,
        })
        break
      case 'yearly':
        currentDate.setFullYear(year + 1)
        updateCaledar({ ...data, currentDate, year: currentDate.getFullYear() })
        break
      default:
        break
    }
  }, [data, updateCaledar])

  return (
    <CalendarContext.Provider
      value={{
        activeMode: data.mode,
        calendar: data,
        updateCaledar,
        handlePrev,
        handleNext,
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}
export const CalendarProvider = Calendar
