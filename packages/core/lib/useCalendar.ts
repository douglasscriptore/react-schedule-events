import { useContext } from 'react'
import { CalendarContext } from './Context'
import { CalendarContextData } from './types'

export function useCalendar(): CalendarContextData {
  const context = useContext(CalendarContext)

  if (!context) {
    throw new Error('useCalendar must be used within a CalendarContext')
  }

  return context
}

export default useCalendar
