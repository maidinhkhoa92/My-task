import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginScreen from '../Components/user/login'
import LoginActions from '../Redux/LoginRedux'

const mapStateToProps = (state) => {
  return {
    information: state.user
  }
}
// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  onLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
  onLogout: () => dispatch(LoginActions.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
