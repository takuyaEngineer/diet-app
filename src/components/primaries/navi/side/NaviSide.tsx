import React from 'react'
import styles from './naviSide.module.scss'

const NaviSide: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <img className={styles.itemIcon} src="/images/settings.jpg" alt="" />
            </div>
            <div className={styles.item}>
                <img className={styles.itemIcon} src="/images/settings.jpg" alt="" />
            </div>
            <div className={styles.item}>
                <img className={styles.itemIcon} src="/images/settings.jpg" alt="" />
            </div>
        </div>
    )
}

export default NaviSide
