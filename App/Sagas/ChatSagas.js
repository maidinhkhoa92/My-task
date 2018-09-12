/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put, select } from 'redux-saga/effects'
import ChatActions from '../Redux/ChatRedux'
// import { ChatSelectors } from '../Redux/ChatRedux'

export function * getChat (api, action) {
  const { data } = action
  // get current data from Store
  // const currentData = yield select(ChatSelectors.getData)
  // make the call to the api
  const state = (state) => state.user.user.accessToken;
  const token = yield select(state);


  //const postID = state.location
  yield api.setAuthToken(token);
  const response = yield call(api.getChat);
  // success?
  if (response.ok) {

    yield put(ChatActions.chatSuccess(response.data.data))
  } else {
    yield put(ChatActions.chatFailure())
  }

}
