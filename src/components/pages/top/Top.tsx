import React from 'react'
import styles from './top.module.scss'
import NaviSide from '../../primaries/navi/side/NaviSide'

const Top: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <NaviSide></NaviSide>
        </div>
    )
}

export default Top
