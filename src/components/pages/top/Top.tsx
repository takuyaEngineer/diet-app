import React from 'react'
import styles from './top.module.scss'
import NaviSide from '../../primaries/navi/side/NaviSide'
import StampWithText from 'components/atoms/stamp/stampWithText/StampWithText'

const Top: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <NaviSide classname={styles.navi_side}></NaviSide>
            <main className={styles.main}>
                <div className={styles.contents_area}>
                    <p className={styles.date}>
                        1/21<span className={styles.day_of_week}>(金)</span>
                    </p>
                    <p className={styles.body_weight}>
                        70.4
                        <span className={styles.body_weight_unit}>kg</span>
                        <span className={styles.body_weight_gain_loss}>+0.4kg</span>
                    </p>
                    <div className={styles.stamp_area}>
                        <StampWithText text="食事" icon_url="emoticon.png"></StampWithText>
                        <StampWithText text="運動" icon_url="emoticon.png"></StampWithText>
                    </div>
                </div>
                <div className={styles.char_area}>
                    <img src="/images/pig.png" alt="" />
                </div>
            </main>
            <div></div>
        </div>
    )
}

export default Top
