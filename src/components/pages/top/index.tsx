import React from 'react'
import styles from './top.module.scss'
import { Header } from '../../primaries/header'
import { Calender } from '../../primaries/calender'

const Top: React.FC = () => {
    return (
        <div className={styles.Top}>
            <Header></Header>
            <Calender></Calender>
        </div>
    )
}

export default Top
