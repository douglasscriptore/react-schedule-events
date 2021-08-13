export interface IModeItem {
  mode: 'daily' | 'monthly' | 'yearly'
  name: string
}

export interface ICalendarProps {
  hideNavigation?: boolean
  currentDate?: Date
}

export interface ICalendar {
  mode: IModeItem['mode']
  currentDate: Date
  day: number
  month: number
  year: number
}

export interface CalendarContextData {
  activeMode: IModeItem['mode']
  calendar: ICalendar
  updateCaledar(calendar: ICalendar): void
  handlePrev(): void
  handleNext(): void
}
