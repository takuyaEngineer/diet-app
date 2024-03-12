import GetLineAccessToken from './GetLineAccessToken'
import axios, { type AxiosResponse } from 'axios'

interface props {
    code: string
}

const GetLineUserInfo = async (props: props): Promise<AxiosResponse> => {
    const AccessTokenData = await GetLineAccessToken({ code: props.code })
    const idToken = AccessTokenData.data.id_token

    const res = await axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        url: 'https://api.line.me/oauth2/v2.1/verify',
        data: {
            id_token: idToken,
            client_id: process.env.REACT_APP_CHANNEL,
        },
    })
    return res
}

export default GetLineUserInfo
