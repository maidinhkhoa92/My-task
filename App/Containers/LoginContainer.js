import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginScreen from '../Components/user/login'
import LoginActions from '../Redux/LoginRedux'

const mapStateToProps = (state) => {
  return {

  }
}
// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  onLogin: (username, password) => dispatch(LoginActions.login(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
