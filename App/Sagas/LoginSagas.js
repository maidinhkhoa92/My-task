import { call, put, select } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'

export function * login (api, action) {
  const { username, password } = action
  // make the call to the api
  const response = yield call(api.login, username, password);
  if (response.ok) {
    yield put(LoginActions.login(response.data))
  } else {
    yield put(LoginActions.logout(response.data))
  }
}

export function * logout (api, action) {

  yield put(LoginActions.logout())
}
