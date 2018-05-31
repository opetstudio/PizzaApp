import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import {registerHeadlessListener} from './App/Listeners';
import App from './App/Containers/App'

AppRegistry.registerComponent('PizzaApp', () => App)
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => registerHeadlessListener);
