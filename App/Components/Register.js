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
    this.props.navigation.goBack();
    this.props.navigation.state.params.onSelect({ name: 'Lucy' });
  }

  render () {
    const information = this.props.navigation.state.params.information;
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
            <TouchableOpacity><Text style={styles.headerRightText}>Menu</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{padding: 10}}>
          <Text>First Name: {information[0].FirstName}</Text>
          <Text>Last Name: {information[0].LastName}</Text>
          <Text>Phone: {information[0].Phone}</Text>
          <Text>Email: {information[0].Email}</Text>
          <Text>Num Views: {information[0].NumViews}</Text>
        </View>
      </View>
    )
  }
}
