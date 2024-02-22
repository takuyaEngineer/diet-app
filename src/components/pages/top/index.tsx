import React from 'react'
import styles from './top.module.scss'
import Header from "../../primaries/header"
import Calender from "../../primaries/calender"

// const a = 2

function Top() {
    console.log("kkk");

    return (
        <div className={styles.Top}>
            <Header />
            <Calender />
        </div>
    )
}

export default Top
