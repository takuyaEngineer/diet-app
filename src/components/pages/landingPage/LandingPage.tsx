import GetLineLoginUrl from 'components/functions/lineLogin/GetLineLoginUrl'
import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
    return (
        <div>
            <Link to={GetLineLoginUrl()}>LINEログイン</Link>
        </div>
    )
}

export default LandingPage
