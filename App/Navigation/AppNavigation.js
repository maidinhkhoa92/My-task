import { StackNavigator } from 'react-navigation'
import ListChat from '../Containers/ListChat'
import Register from '../Containers/Register'
import LoginContainer from '../Containers/LoginContainer'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ListChat: { screen: ListChat },
  Register: { screen: Register },
  LoginScreen: { screen: LoginContainer }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
})

export default PrimaryNav
