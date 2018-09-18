import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Header } from '../Components/Common'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HappeningStyle'

class Happening extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <View style={{flex: 1}}>
        <Header title="Happening"/>
        <ScrollView style={styles.container}>
        </ScrollView>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Happening)
