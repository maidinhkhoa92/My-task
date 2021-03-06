// a library to wrap and simplify api calls
import apisauce from 'apisauce'

const user = (baseURL = 'https://dev-api.kargoe.com/webapi/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  const setAuthToken = (token) => api.setHeader('authorization', 'Token ' + token);


  const login = (username, password) => api.post('v1/public/login', {
    Username: username, Password: password, appDetails: {
      "buildNumber": "1",
      "bundleDisplayName": "ignite1",
      "appVersion": "1.0",
      "bundleId": "org.reactjs.native.example.ignite1",
      "urlScheme": "krgoedev"
    }
  })
  const getChat = () => api.get('v1/chat');
  return {
    login,
    getChat,
    setAuthToken
  }
}

// let's return back our create method as the default.
export default {
  user
}
