import { nanoid } from 'nanoid'

const GetLineLoginUrl = (): string => {
    const state = nanoid(10)
    const nonce = nanoid(10)

    const lineLoginUrl =
        'https://access.line.me/oauth2/v2.1/authorize' +
        '?response_type=code' +
        `&client_id=${process.env.REACT_APP_CHANNEL ?? ''}` +
        `&redirect_uri=http://${process.env.REACT_APP_DOMAIN ?? ''}/loading` +
        `&state=${state}` +
        '&scope=profile%20openid' +
        `&nonce=${nonce}`

    return lineLoginUrl
}

export default GetLineLoginUrl
