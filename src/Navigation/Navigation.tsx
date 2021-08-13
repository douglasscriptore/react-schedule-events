import React, { useCallback, useMemo, useState } from 'react'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'

import './navigation.styles.scss'
import { useCalendar, useMonthName } from '../../packages/core/lib'
import { IModeItem } from '../../packages/core/lib/types'

interface IModeProps {
  activeMode?: IModeItem['mode']
}

const Navigation: React.FC<IModeProps> = () => {
  const { calendar, handleNext, handlePrev, updateCaledar } = useCalendar()
  const { day, month, year, mode } = calendar

  const [selected, setSelected] = useState<IModeItem['mode']>(mode)

  const monthName = useMonthName(month)

  const modes: IModeItem[] = useMemo(
    () => [
      { mode: 'daily', name: 'Day' },
      { mode: 'monthly', name: 'Month' },
      { mode: 'yearly', name: 'Year' },
    ],
    []
  )

  const handleChange = useCallback(
    mode => {
      setSelected(mode)
      updateCaledar({ ...calendar, mode })
    },
    [calendar, updateCaledar]
  )

  const renderNav = useMemo(
    () => (
      <nav>
        <button onClick={handlePrev}>
          <FiArrowLeft />
        </button>
        {selected === 'daily' && (
          <span>
            <strong>{day}</strong> {monthName} {year}
          </span>
        )}
        {selected === 'monthly' && (
          <span>
            <strong>{monthName}</strong> {year}
          </span>
        )}
        {selected === 'yearly' && (
          <span>
            <strong>{year}</strong>
          </span>
        )}
        <button onClick={handleNext}>
          <FiArrowRight />
        </button>
      </nav>
    ),
    [day, handleNext, handlePrev, monthName, selected, year]
  )

  const renderModes = useMemo(
    () => (
      <div className="mode">
        {modes.map(item => (
          <button
            className={selected === item.mode ? 'active' : ''}
            key={item.mode}
            onClick={() => handleChange(item.mode)}
          >
            {item.name}
          </button>
        ))}
      </div>
    ),
    [handleChange, modes, selected]
  )

  return (
    <header className="navigation">
      {renderNav}
      {renderModes}
    </header>
  )
}

export default Navigation
