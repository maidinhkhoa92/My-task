import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import Register from '../Components/Register'
import LoginActions from '../Redux/LoginRedux'

const mapStateToProps = (state) => {
  return {
    information: state.user.user.data[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(LoginActions.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
