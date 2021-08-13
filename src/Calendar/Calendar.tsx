import React, { useState } from 'react'

import { ICalendar, ICalendarProps } from '../../packages/core/lib/types'
import { CalendarProvider, CalendarContextData } from '../../packages/core/lib'
import Navigation from '../Navigation'

import '../styles/global.scss'
import './calendar.styles.scss'

const Calendar: React.FC<ICalendarProps> = ({
  hideNavigation = false,
  // currentDate = new Date(),
}) => {
  return (
    <CalendarProvider>
      {/* <CalendarContext.Consumer>
        {() => ( */}
      <div className="calendar">
        {!hideNavigation && <Navigation />}
        This is my calendar!
      </div>
      {/* )} */}
      {/* </CalendarContext.Consumer> */}
    </CalendarProvider>
  )
}

export default Calendar
