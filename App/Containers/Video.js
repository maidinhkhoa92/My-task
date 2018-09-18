import React, { Component } from 'react'
import { ScrollView, View, PixelRatio } from 'react-native'
import { Header, Menu } from '../Components/Common'
import VideoList from '../Components/VideoList'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/VideoStyle'

class Video extends Component {
  constructor( props ){
    super( props );
    this.state = {
      toggleMenu: false
    }
  }

  componentWillMount(){
    console.log(PixelRatio.get());
  }

  toggleMenu(value) {
    this.setState({
      toggleMenu : value
    })
  }

  render () {
    const videoUrl = [
      "https://vjs.zencdn.net/v/oceans.mp4",
      "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
    ];
    return (
      <Menu
        toggleMenu={this.state.toggleMenu}
        navigation={this.props.navigation}
        >
        <Header
          title="Video"
          toggleMenu={this.toggleMenu.bind(this)}
          />

        <ScrollView style={styles.container}>
          <VideoList data={videoUrl} />

        </ScrollView>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)
