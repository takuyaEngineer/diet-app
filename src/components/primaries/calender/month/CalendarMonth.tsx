import React, { useState } from 'react'
import ReactCalendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
import styles from './calendarMonth.module.scss'
import 'styles/uniquePages/calendarMonth.scss'
import classNames from 'classnames'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const CalendarMonth: React.FC = () => {
    const [value, onChange] = useState<Value>(new Date())

    return (
        <div>
            <ReactCalendar
                onChange={onChange}
                value={value}
                className={classNames(styles.calendar, 'calendar_month')}
            />
        </div>
    )
}

export default CalendarMonth
