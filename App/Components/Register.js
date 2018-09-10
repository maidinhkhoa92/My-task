import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/RegisterStyle'

import LoginScreen from './user/login';

// navigation
import { NavigationActions } from 'react-navigation';

export default class Register extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  constructor(props){
    super(props);
    this.state = {
      navigation: false,
    }
  }
  componentWillMount() {
  }
  _backAction(){
    this.setState({navigation: true}, () => {console.log(this.state.navigation)});

  }

  render () {
    if(this.state.navigation){
      return (
        <LoginScreen black="text" />
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={()=> this._backAction()}><Text>Back</Text></TouchableOpacity>
          </View>
          <View style={styles.headerMid}>
            <TouchableOpacity><Text style={styles.headerMidText}>I love mac</Text></TouchableOpacity>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={()=> this.props.navigation.toggleDrawer()}><Text style={styles.headerRightText}>Menu</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{padding: 10}}>
          <Text>First Name: {this.props.information.FirstName}</Text>
          <Text>Last Name: {this.props.information.LastName}</Text>
          <Text>Phone: {this.props.information.Phone}</Text>
          <Text>Email: {this.props.information.Email}</Text>
          <Text>Num Views: {this.props.information.NumViews}</Text>
        </View>
      </View>
    )
  }
}
