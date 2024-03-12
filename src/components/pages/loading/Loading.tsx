import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import GetLineUserInfo from 'components/functions/lineLogin/GetLineUserInfo'

const Load: React.FC = () => {
    const query = new URLSearchParams(useLocation().search)
    const queryCode = query.get('code') ?? ''
    const navigate = useNavigate()

    useEffect(() => {
        GetLineUserInfo({ code: queryCode })
            .then(res => {
                // TODO：res.data.sub（ユーザーID）を使ってユーザーがDBに存在するか確認する。
                // ユーザーがDBに存在しなかったら会員登録画面に遷移。存在したらトップ画面に遷移
                console.log(res)
                navigate('/top')
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return <div>Load</div>
}

export default Load
