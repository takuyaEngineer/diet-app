import React from 'react'
import styles from './headerSubPage.module.scss'
import { useNavigate } from 'react-router-dom'

interface props {
    title: string
}

const HeaderSubPage: React.FC<props> = (props: props) => {
    const navigate = useNavigate()

    const goBack = (): void => {
        navigate(-1)
    }

    return (
        <header className={styles.wrapper}>
            <button
                className={styles.go_back_button}
                onClick={() => {
                    goBack()
                }}
            >
                戻る
            </button>
            <p className={styles.title}>{props.title}</p>
        </header>
    )
}

export default HeaderSubPage
