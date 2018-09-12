import React, { Component } from 'react'
import { ScrollView, Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Header, Input, ListItem } from '../Components/Common'
import ChatActions from '../Redux/ChatRedux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ListChatStyle'

class ListChat extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  componentWillMount() {
    this.props.onGetChat();
  }
  render () {
    console.log(this.props);
    return (
      <View style={{flex: 1}}>
        <Header title="Messages"/>
        <ScrollView style={styles.container}>
          <Input />
          <FlatList
            data={this.props.list}
            renderItem={({item}) => <ListItem item={item} />}
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.chat.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetChat: () => dispatch(ChatActions.chatRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListChat)
