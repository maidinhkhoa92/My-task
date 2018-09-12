import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import moment from 'moment'
import { Images } from '../../Themes';
import styles from './Styles/ListItemStyle'

export default class ListItem extends Component {
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
  convertTime(timestamp){
    const time = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
    return moment(time).fromNow();;
  }
  render () {
    const {item} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.avatarWrapper}>
          <Image source={Images.avatar} style={styles.imageWrapper}/>
        </View>
        <View style={styles.infoWraper}>
          <Text style={styles.name}>{item.OtherUsername}</Text>
          <Text style={styles.message}>{item.Message}</Text>
        </View>
        <View style={styles.timeWrapper}>
          <Text style={styles.time}>{this.convertTime(item.TimeStamp)}</Text>
        </View>
      </View>
    )
  }
}
