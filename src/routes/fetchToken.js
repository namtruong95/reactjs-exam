import decode from 'jsonwebtoken/decode'
import {parseZone} from 'moment'

const fetchToken = () => {
  const callingApp = JSON.parse(localStorage.getItem('calling_app'))

  if (callingApp) {
    const payload = decode(callingApp.token)
    if (parseZone().unix() < payload.exp) {
      return callingApp
    }
    localStorage.clear()
    return null
  }
  return null
}

export default fetchToken
