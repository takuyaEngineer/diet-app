import React from 'react'
import styles from './naviSide.module.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

interface props {
    classname?: string
}

const NaviSide: React.FC<props> = (props: props) => {
    return (
        <div className={classNames(styles.wrapper, props.classname)}>
            <Link className={styles.item} to={'/setting'}>
                <img className={styles.itemIcon} src="/images/settings.jpg" alt="" />
            </Link>
            <Link className={styles.item} to={'/calendar'}>
                <img className={styles.itemIcon} src="/images/settings.jpg" alt="" />
            </Link>
            <Link className={styles.item} to={'/graph'}>
                <img className={styles.itemIcon} src="/images/settings.jpg" alt="" />
            </Link>
        </div>
    )
}

export default NaviSide
