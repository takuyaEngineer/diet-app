import CalendarMonth from 'components/primaries/calender/month/CalendarMonth'
import HeaderSubPage from 'components/primaries/header/headerSubPage/HeaderSubPage'
import React from 'react'
import styles from './calendar.module.scss'

const Calendar: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <HeaderSubPage title="カレンダー"></HeaderSubPage>
            <main>
                <CalendarMonth></CalendarMonth>
            </main>
        </div>
    )
}

export default Calendar
