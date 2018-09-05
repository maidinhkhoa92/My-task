import { StackNavigator } from 'react-navigation'
import LoginContainer from '../Containers/LoginContainer'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginScreen: { screen: LoginContainer }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
})

export default PrimaryNav
