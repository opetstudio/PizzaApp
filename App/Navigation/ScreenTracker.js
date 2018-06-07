import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge'
import { forEach, isUndefined, toString } from 'lodash'
import NavigationHelper from 'utils/helper/navigator'
import AppConfig from '../Config/AppConfig'
import { getCurrentRouteInfo } from '../utils/helper/currentRouteName'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

const tracker = new GoogleAnalyticsTracker(AppConfig.analytics.trackerId)

const filterScreenName = (screenName) => {
  switch (screenName) {
    case 'VideoPlayerFullScreen': {
      return 'VideoPlayer'
    }
    default: {
      return screenName
    }
  }
}
const getScreenName = (title, screen) => {
  if (title === 'maxstream-live-events') {
    return 'LiveEventListing'
  } else if (title === 'maxstream-channel') {
    return 'ChannelListing'
  } else {
    forEach(title, t => (screen = `${screen}-${t}`))
    return screen
  }
}

const ScreenTracker = (prevState, currentState, profile, myPackagesList) => {
  const currentScreenInfo = getCurrentRouteInfo(currentState)
  const prevScreenInfo = getCurrentRouteInfo(prevState)
  NavigationHelper.setCurrentRouteInfo(currentScreenInfo)
  NavigationHelper.setCurrentState(currentState)
  console.log('[ScreenTracker]', currentScreenInfo)
  if (
    !currentScreenInfo.routeName.match('Drawer') &&
    prevScreenInfo.routeName !== currentScreenInfo.routeName
  ) {
    let screen = filterScreenName(currentScreenInfo.routeName)
    tracker.trackScreenView(screen)
  }
}

export default ScreenTracker
