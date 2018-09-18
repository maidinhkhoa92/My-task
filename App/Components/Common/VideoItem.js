import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, Image } from 'react-native'
import Video from 'react-native-video';
import styles from './Styles/VideoStyle'

export default class VideoItem extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      paused: this.props.paused ? true : false,
    };
    /* listener */
    this.events = {
      onPause: this.props.onPause,
      onPlay: this.props.onPlay,

    };
    /* function */
    this.methods = {
      togglePlayPause: this._togglePlayPause.bind( this ),
    };
    /* player */
    this.player = {
    };
  }

  componentWillMount() {

  }

  componentWillReceiveProps(newProps, props) {
    this.setState({
      paused: newProps.paused
    })

  }

  _togglePlayPause() {
    let state = this.state;
    state.paused = !state.paused;

    if (state.paused) {
      typeof this.events.onPause === 'function' && this.events.onPause();
      this.props.stopAllVideo(null);
    }
    else {
      typeof this.events.onPlay === 'function' && this.events.onPlay();
      this.props.stopAllVideo(this.props.index);
    }
    this.setState( state );
  }

  /****************
    render
  *****************/
  renderPlayPause() {
    let source = this.state.paused === true ? require( '../../Images/play.png' ) : require( '../../Images/pause.png' );
    return (
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={ 0.3 }
        onPress={()=>{
          this.methods.togglePlayPause()
        }}
        style={styles.playPause}
      >
        <Image source={ source } />
      </TouchableHighlight>
    );
  }
  render () {
    return (
      <View style={styles.container}>
        <Video source={{uri: this.props.url}}
         ref={ videoPlayer => this.player.ref = videoPlayer }
         paused={ this.state.paused }
         style={styles.backgroundVideo}
        />
        {this.renderPlayPause()}
      </View>
    )
  }
}
