import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#fff',
  },
  headerLeft: {
    flex: 20,
    paddingLeft: 7
  },
  headerMid: {
    flex: 60,
  },
  headerMidText: {
    textAlign: 'center',
  },
  headerRight: {
    flex: 20,
  },
  headerRightText: {
    textAlign: 'right',
    paddingRight: 7
  }
})
