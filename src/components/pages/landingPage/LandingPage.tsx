import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
    console.log(process.env.REACT_APP_AAA)

    return (
        <div>
            <Link to={'/login'}>ログイン</Link>
            <Link to={'/'}>会員登録</Link>
        </div>
    )
}

export default LandingPage
