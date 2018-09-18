import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native'
import { VideoItem } from './Common'
import styles from './Styles/VideoListStyle'

export default class VideoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videoPlay: null,
    }
  }
  stopAllVideo(index){
    this.setState({
      videoPlay: index,
    })
  }
  checkIndexVideo(index){
    let {videoPlay} = this.state;
    if(index === videoPlay){
      return false;
    }
    return true
  }
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          extraData={this.state}
          data={this.props.data}
          renderItem={({item, index}) => <VideoItem url={item}
            paused={this.checkIndexVideo(index)}
            index={index}
            stopAllVideo={this.stopAllVideo.bind(this)}/>}
        />
      </View>
    )
  }
}
