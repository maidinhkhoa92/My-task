import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
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
    fontSize: 20
  },
  headerRight: {
    flex: 20,
  },
  headerRightText: {
    textAlign: 'right',
    paddingRight: 7
  }
})
