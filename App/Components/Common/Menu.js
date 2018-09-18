import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer'
import { StackActions, NavigationActions } from 'react-navigation';
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './Styles/MenuStyle'

export default class Menu extends Component {
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        open={this.props.toggleMenu}
        type='overlay'
        side='right'
        content={<MenuItem closeDrawer={this.closeDrawer.bind(this)} navigation={this.props.navigation}/>}
        >
        {this.props.children}
      </Drawer>
    )
  }
}

class MenuItem extends Component {
  clickOnMenu(route){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: route })],
    });
    this.props.navigation.dispatch(resetAction);
  }
  render () {
    const menu = [
      {
        text: 'home',
        icon: 'home',
        route: 'Home'
      },{
        text: 'camera',
        icon: 'camera',
        route: 'Camera'
      },{
        text: 'explora',
        icon: 'search',
        route: 'Explora'
      },{
        text: 'messages',
        icon: 'envelope',
        route: 'Messages'
      },{
        text: 'kargolytics',
        icon: 'dollar',
        route: 'Kargolytics'
      },{
        text: 'happening',
        icon: 'heart',
        route: 'Happening'
      },{
        text: 'profile',
        icon: 'user',
        route: 'Profile'
      },{
        text: 'settings',
        icon: 'cog',
        route: 'Settings'
      }
    ];
    return (
      <TouchableOpacity style={styles.content} onPress={() => this.props.closeDrawer()}>
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => this.props.closeDrawer()}
            >
            <Icon name="times" style={styles.icon} color="#fff" />
          </TouchableOpacity>
          {
            menu.map((data, key) => {
              return(
                <TouchableOpacity
                  key={key}
                  onPress={() => this.clickOnMenu(data.route)}
                  style={styles.click}
                  >
                  <View style={styles.iconWrapper}>
                  <Icon name={data.icon} style={styles.icon} color="#fff" />
                  </View>
                  <Text style={styles.text}>{data.text}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </TouchableOpacity>
    )
  }
}
