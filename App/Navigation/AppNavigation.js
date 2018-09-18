import { StackNavigator } from 'react-navigation'
import Settings from '../Containers/Settings'
import Profile from '../Containers/Profile'
import Happening from '../Containers/Happening'
import Kargolytics from '../Containers/Kargolytics'
import Messages from '../Containers/Messages'
import Explora from '../Containers/Explora'
import Camera from '../Containers/Camera'
import Home from '../Containers/Home'
import NewTestScreen from '../Containers/NewTestScreen'
import NewTest from '../Containers/NewTest'
import Video from '../Containers/Video'
import ListChat from '../Containers/ListChat'
import Register from '../Containers/Register'
import LoginContainer from '../Containers/LoginContainer'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Settings: { screen: Settings },
  Profile: { screen: Profile },
  Happening: { screen: Happening },
  Kargolytics: { screen: Kargolytics },
  Messages: { screen: Messages },
  Explora: { screen: Explora },
  Camera: { screen: Camera },
  Home: { screen: Home },
  NewTestScreen: { screen: NewTestScreen },
  NewTest: { screen: NewTest },
  Video: { screen: Video },
  ListChat: { screen: ListChat },
  Register: { screen: Register },
  LoginScreen: { screen: LoginContainer }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Video',
})

export default PrimaryNav
