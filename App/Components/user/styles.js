import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  loginWrapper: {
    backgroundColor: '#fff',
    flex: 1
  },
  header: {
    paddingTop: 30,
    paddingBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
  },
  middle: {
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  items: {
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row',
  },
  label: {
    flex: 50,
  },
  labelText: {
    fontSize: 22,
    color: '#626a6c'
  },
  inputWrapper: {
    flex: 50,
  },
  input: {
    fontSize: 22,
    textAlign :'right',
    color: '#c7c7cd'
  },
  errorWrapper: {
    paddingTop: 35,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#f4f2ef'
  },
  errorText: {
    fontSize: 20,
    color: '#ff0909',
    textAlign: 'right'
  },
  button: {
    backgroundColor: '#d0d0d0',
    paddingTop: 10,
    paddingBottom: 20,
    bottom: 0,
    marginTop: 50
  },
  buttonActive: {
    backgroundColor: '#3c5a9a',
    paddingTop: 10,
    paddingBottom: 20,
    bottom: 0,
    marginTop: 50
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22
  }
})