import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/HeaderStyle'

export default class Header extends Component {

  render () {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity><Icon name="long-arrow-left" size={20} color="#000" /></TouchableOpacity>
        </View>
        <View style={styles.headerMid}>
          <Text style={styles.headerMidText}>{this.props.title}</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => this.props.toggleMenu(true)}>
            <Icon style={styles.headerRightText} name="bars" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
