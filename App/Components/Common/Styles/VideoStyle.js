import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    height: 220,
  },
  backgroundVideo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    zIndex: 1,
  },
  playPause: {
    position: 'relative',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  },

})
