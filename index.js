import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
// import Main from './App/Main'

import {registerHeadlessListener} from './App/Listeners'
import App from './App/Containers/App'
// const App = Main.App
// const registerHeadlessListener = Main.registerHeadlessListener

AppRegistry.registerComponent('PizzaApp', () => App)
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => registerHeadlessListener)
