import axios, { type AxiosResponse } from 'axios'

interface props {
    code: string
}

const GetLineAccessToken = async (props: props): Promise<AxiosResponse> => {
    const res = await axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        url: 'https://api.line.me/oauth2/v2.1/token',
        data: {
            grant_type: 'authorization_code',
            code: props.code,
            redirect_uri: `http://${process.env.REACT_APP_DOMAIN ?? ''}/loading`,
            client_id: process.env.REACT_APP_CHANNEL,
            client_secret: process.env.REACT_APP_CHANNEL_SECRET,
        },
    })

    return res
}

export default GetLineAccessToken
