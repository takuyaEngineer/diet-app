import React from 'react'
import styles from './stampWithText.module.scss'

interface props {
    text: string
    icon_url: string
}

const StampWithText: React.FC<props> = (props: props) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>{props.text}</p>
            <img className={styles.icon} src={'/images/' + props.icon_url} alt="" />
        </div>
    )
}

export default StampWithText
