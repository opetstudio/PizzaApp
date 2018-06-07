import { NavigationActions } from 'react-navigation'
import firebase from 'react-native-firebase'
// import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge'
import AppConfig from '../Config/AppConfig'

// const tracker = new GoogleAnalyticsTracker(AppConfig.analyticsTrackerId)

const Analytics = firebase.analytics()

// gets the current screen from navigation state
const getCurrentRouteName = (navigationState) => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

const screenTracking = ({ getState }) => next => (action) => {
  if (
    action.type !== NavigationActions.NAVIGATE &&
    action.type !== NavigationActions.BACK
  ) {
    return next(action)
  }

  const currentScreen = getCurrentRouteName(getState().nav)
  const result = next(action)
  const nextScreen = getCurrentRouteName(getState().nav)
  // console.log('[ScreenTrackingMiddleware] currentScreen=', currentScreen)
  // console.log('[ScreenTrackingMiddleware] nextScreen=', nextScreen)
  if (nextScreen !== currentScreen) {
    try {
      // console.tron.log(`NAVIGATING ${currentScreen} to ${nextScreen}`)
      // let screen = filterScreenName(currentScreenInfo.routeName)
      // console.log('[ScreenTracker] screen', screen)
      // tracker.trackScreenView(nextScreen)
      Analytics.setCurrentScreen(nextScreen)
      
      // Example: Analytics.trackEvent('user_navigation', {currentScreen, nextScreen})
    } catch (e) {
      console.tron.log(e)
    }
  }
  return result
}

export default screenTracking
