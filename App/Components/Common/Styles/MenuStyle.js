import { StyleSheet, PixelRatio } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: 'flex-end'
  },
  wrapper: {
    flexDirection: 'column',
    width: '20%',
    backgroundColor: '#ccc',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between'
  },
  iconWrapper: {
    width: 17 * PixelRatio.get(),
    height: 17 * PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17 * PixelRatio.get() ,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 3,
  },
  icon: {
    fontSize: 11 * PixelRatio.get()
  },
  text: {
    color: '#fff',
    fontSize: 5 * PixelRatio.get(),
  },
  click: {
    alignItems: 'center'
  }
})
