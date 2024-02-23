import React from 'react'
import styles from './naviSide.module.scss'
import classNames from 'classnames'

interface props {
    classname?: string
}

const NaviSide: React.FC<props> = (props: props) => {
    return (
        <div className={classNames(styles.wrapper, props.classname)}>
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
