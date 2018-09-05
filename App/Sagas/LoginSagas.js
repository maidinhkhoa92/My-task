import { call, put, select } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

export function * login (api, action) {
  const { username, password } = action
  // make the call to the api
  const response = yield call(api.login, username, password)
  console.log(response);
  if (response.ok) {
    alert(response.data.message)

  } else {
    alert(response.data.errors[0].detail)
  }
}
