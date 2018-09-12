import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  avatarWrapper: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapper:  {
    width: 50,
    height: 50
  },
  infoWraper: {
    flex: 70,
  },
  name: {
    fontWeight: '700'
  },
  timeWrapper: {
    flex: 10,
    justifyContent: 'center'
  }
})
